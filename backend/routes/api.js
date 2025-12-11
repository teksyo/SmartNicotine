const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');

router.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

router.get('/test-db', async (req, res) => {
  try {
    // Test basic connection
    const { data: testData, error: testError } = await supabase.from('typeform_submissions').select('count').limit(1);
    
    // Test if we can read any records at all
    const { data, error } = await supabase
      .from('typeform_submissions')
      .select('id, email')
      .limit(3);
      
    res.json({ 
      message: 'Database test results',
      canConnect: !testError,
      connectionError: testError?.message || null,
      recordCount: data?.length || 0,
      queryError: error?.message || null,
      sampleRecords: data || []
    });
  } catch (err) {
    res.status(500).json({ error: 'Database test failed', details: err.message });
  }
});

router.get('/debug/test-email', async (req, res) => {
  try {
    const testEmail = 'johnsmith@mail.com';
    
    console.log('🧪 Testing different query variations...');
    
    // Test 1: Exact match
    const test1 = await supabase
      .from('typeform_submissions')
      .select('*')
      .eq('email', testEmail)
      .limit(1);
    
    // Test 2: Case insensitive match
    const test2 = await supabase
      .from('typeform_submissions')
      .select('*')
      .ilike('email', testEmail)
      .limit(1);
      
    // Test 3: Get all records to see what emails exist
    const test3 = await supabase
      .from('typeform_submissions')
      .select('email, id')
      .limit(10);

    res.json({
      testEmail,
      exactMatch: { count: test1.data?.length || 0, error: test1.error?.message },
      caseInsensitive: { count: test2.data?.length || 0, error: test2.error?.message },
      allEmails: test3.data?.map(r => r.email) || [],
      rawData: test1.data?.[0] || 'none'
    });

  } catch (err) {
    console.error('Test error:', err);
    res.status(500).json({ error: 'Test failed', details: err.message });
  }
});

router.get('/debug/users', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('typeform_submissions')
      .select('id, email, response_id, answers')
      .order('created_at', { ascending: false })
      .limit(5);

    if (error) {
      console.error('Supabase query error:', error);
      return res.status(500).json({ error: 'Database query failed', details: error.message });
    }

    // Extract emails from both sources
    const enrichedData = data?.map(record => ({
      id: record.id,
      emailColumn: record.email,
      emailFromAnswers: record.answers?.['Email address'],
      responseId: record.response_id,
      allAnswers: Object.keys(record.answers || {})
    })) || [];

    res.json({
      count: data?.length || 0,
      users: enrichedData
    });

  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

router.get('/user', async (req, res) => {
  try {
    const { email } = req.query;
    
    if (!email) {
      console.log("No Email");
      return res.status(400).json({ error: 'Email parameter is required' });
    }

    console.log(`🔍 Searching for email: "${email}"`);
    console.log(`🔍 Normalized email: "${email.toLowerCase().trim()}"`);

    // First try to search by the dedicated email column (faster)
    console.log("📧 Trying email column search...");
    let { data, error } = await supabase
      .from('typeform_submissions')
      .select('*')
      .eq('email', email)
      .order('created_at', { ascending: false })
      .limit(1);

    console.log("📊 Email column search result:", {
      dataLength: data?.length || 0,
      error: error?.message || 'none',
      firstRecord: data?.[0] || 'none'
    });

    // If not found, fallback to searching in JSON answers (for backward compatibility)
    if ((!data || data.length === 0) && !error) {
      console.log("📧 Trying JSON answers search...");
      const fallbackResult = await supabase
        .from('typeform_submissions')
        .select('*')
        .ilike('answers->>Email address', email)
        .order('created_at', { ascending: false })
        .limit(1);
      
      console.log("📊 JSON search result:", {
        dataLength: fallbackResult.data?.length || 0,
        error: fallbackResult.error?.message || 'none',
        firstRecord: fallbackResult.data?.[0] || 'none'
      });
      
      data = fallbackResult.data;
      error = fallbackResult.error;
    }

    if (error) {
      console.error('Supabase query error:', error);
      return res.status(500).json({ error: 'Database query failed', details: error.message });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userProfile = data[0];
    
    res.json({
      id: userProfile.id,
      email: userProfile.email || email,
      formId: userProfile.form_id,
      responseId: userProfile.response_id,
      submittedAt: userProfile.submitted_at,
      answers: userProfile.answers,
      createdAt: userProfile.created_at
    });

  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

// Waitlist/Subscribers API
router.post('/subscribers', async (req, res) => {
  try {
    const { fullname, email } = req.body;
    
    if (!fullname || !email) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['fullname', 'email']
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    console.log(`📝 Adding subscriber: ${fullname} (${email})`);

    // Check if subscriber already exists
    const { data: existing } = await supabase
      .from('subscribers')
      .select('id, email')
      .eq('email', email.toLowerCase().trim())
      .limit(1);

    if (existing && existing.length > 0) {
      return res.status(409).json({ 
        error: 'Email already subscribed',
        subscriberId: existing[0].id
      });
    }

    // Insert new subscriber
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{
        fullname: fullname.trim(),
        email: email.toLowerCase().trim()
      }])
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      
      // Handle case where table doesn't exist
      if (error.message?.includes('relation "subscribers" does not exist') || 
          error.message?.includes("Could not find the table 'public.subscribers'")) {
        return res.status(500).json({ 
          error: 'Database table not found',
          details: 'Please create the subscribers table first',
          sql: `
-- Run this SQL in your Supabase dashboard:
CREATE TABLE IF NOT EXISTS subscribers (
  id SERIAL PRIMARY KEY,
  fullname VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  registeredOn TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
CREATE INDEX IF NOT EXISTS idx_subscribers_registered ON subscribers(registeredOn);
          `.trim()
        });
      }
      
      return res.status(500).json({ 
        error: 'Failed to add subscriber',
        details: error.message 
      });
    }

    console.log('✅ Subscriber added successfully:', data);

    res.status(201).json({
      success: true,
      message: 'Successfully added to waitlist',
      subscriber: {
        id: data.id,
        fullname: data.fullname,
        email: data.email,
        registeredOn: data.registeredon
      }
    });

  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ 
      error: 'Internal server error',
      details: err.message 
    });
  }
});

// Get all subscribers (for admin use)
router.get('/subscribers', async (req, res) => {
  try {
    const { limit = 50, offset = 0 } = req.query;
    
    const { data, error, count } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact' })
      .order('registeredon', { ascending: false })
      .range(offset, offset + parseInt(limit) - 1);

    if (error) {
      console.error('Supabase query error:', error);
      return res.status(500).json({ 
        error: 'Failed to fetch subscribers',
        details: error.message 
      });
    }

    res.json({
      subscribers: data || [],
      total: count || 0,
      limit: parseInt(limit),
      offset: parseInt(offset)
    });

  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ 
      error: 'Internal server error',
      details: err.message 
    });
  }
});

module.exports = router;