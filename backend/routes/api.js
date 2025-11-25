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

module.exports = router;