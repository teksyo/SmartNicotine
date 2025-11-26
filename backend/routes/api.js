const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');

router.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

router.get('/test-db', async (req, res) => {
  try {
    const { data, error } = await supabase.from('test').select('*').limit(1);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    res.json({ message: 'Database connection successful', data });
  } catch (err) {
    res.status(500).json({ error: 'Database connection failed', details: err.message });
  }
});

router.get('/user', async (req, res) => {
  try {
    const { email } = req.query;
    
    if (!email) {
      return res.status(400).json({ error: 'Email parameter is required' });
    }

    // First try to search by the dedicated email column (faster)
    let { data, error } = await supabase
      .from('typeform_submissions')
      .select('*')
      .eq('email', email.toLowerCase().trim())
      .order('created_at', { ascending: false })
      .limit(1);

    // If not found, fallback to searching in JSON answers (for backward compatibility)
    if ((!data || data.length === 0) && !error) {
      const fallbackResult = await supabase
        .from('typeform_submissions')
        .select('*')
        .ilike('answers->>Email address', email)
        .order('created_at', { ascending: false })
        .limit(1);
      
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

module.exports = router;