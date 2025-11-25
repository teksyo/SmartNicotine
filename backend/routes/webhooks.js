const express = require('express');
const crypto = require('crypto');
const supabase = require('../config/supabase');

const router = express.Router();

const verifyTypeformSignature = (req, res, next) => {
  const signature = req.get('Typeform-Signature');
  const secret = process.env.TYPEFORM_WEBHOOK_SECRET;
  
  console.log('Signature verification debug:');
  console.log('Received signature:', signature);
  console.log('Secret exists:', !!secret);
  
  if (!signature || !secret) {
    console.log('Missing signature or secret');
    return res.status(401).json({ error: 'Missing signature or secret' });
  }

  const payload = JSON.stringify(req.body);
  console.log('Payload for signature:', payload);
  
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('base64');

  const providedSignature = signature.replace('sha256=', '');
  
  console.log('Expected signature:', expectedSignature);
  console.log('Provided signature:', providedSignature);
  console.log('Signatures match:', expectedSignature === providedSignature);

  if (expectedSignature !== providedSignature) {
    console.log('Signature verification failed');
    return res.status(401).json({ error: 'Invalid signature', debug: { expected: expectedSignature, provided: providedSignature } });
  }

  console.log('Signature verification successful');
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
      case 'phone_number':
        value = answer.text;
        break;
      case 'email':
        value = answer.email;
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

router.post('/typeform', async (req, res) => {
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