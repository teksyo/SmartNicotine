const express = require('express');
const crypto = require('crypto');
const supabase = require('../config/supabase');

const router = express.Router();

const verifyTypeformSignature = (req, res, next) => {
  const signature = req.get('Typeform-Signature');
  const secret = process.env.TYPEFORM_WEBHOOK_SECRET;
  
  if (!signature || !secret) {
    return res.status(401).json({ error: 'Missing signature or secret' });
  }

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(req.body))
    .digest('base64');

  const providedSignature = signature.replace('sha256=', '');

  if (expectedSignature !== providedSignature) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  next();
};

const transformTypeformData = (submission) => {
  const answers = submission.answers || [];
  const transformedData = {
    form_id: submission.form_id,
    response_id: submission.token,
    submitted_at: submission.submitted_at,
    answers: {}
  };

  answers.forEach(answer => {
    const fieldRef = answer.field?.ref || answer.field?.id;
    let value = null;

    switch (answer.type) {
      case 'text':
      case 'email':
      case 'phone_number':
        value = answer.text;
        break;
      case 'number':
        value = answer.number;
        break;
      case 'boolean':
        value = answer.boolean;
        break;
      case 'choice':
        value = answer.choice?.label;
        break;
      case 'choices':
        value = answer.choices?.labels?.join(', ');
        break;
      case 'date':
        value = answer.date;
        break;
      case 'url':
        value = answer.url;
        break;
      default:
        value = JSON.stringify(answer);
    }

    if (fieldRef) {
      transformedData.answers[fieldRef] = value;
    }
  });

  return transformedData;
};

router.post('/typeform', verifyTypeformSignature, async (req, res) => {
  try {
    console.log('Received Typeform webhook:', JSON.stringify(req.body, null, 2));

    const { form_response } = req.body;
    
    if (!form_response) {
      return res.status(400).json({ error: 'No form response data' });
    }

    const transformedData = transformTypeformData(form_response);

    const { data, error } = await supabase
      .from('typeform_submissions')
      .insert([transformedData]);

    if (error) {
      console.error('Supabase insertion error:', error);
      return res.status(500).json({ 
        error: 'Failed to save submission', 
        details: error.message 
      });
    }

    console.log('Successfully saved submission:', transformedData.response_id);
    res.status(200).json({ 
      success: true, 
      message: 'Submission saved successfully',
      response_id: transformedData.response_id
    });

  } catch (err) {
    console.error('Webhook processing error:', err);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: err.message 
    });
  }
});

router.get('/typeform/test', (req, res) => {
  res.json({ 
    message: 'Typeform webhook endpoint is active',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;