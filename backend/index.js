const express = require('express');
const cors = require('cors');
require('dotenv').config();

const apiRoutes = require('./routes/api');
const webhookRoutes = require('./routes/webhooks');
const chatRoutes = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'SmartNicotine Backend API' });
});

app.use('/api', apiRoutes);
app.use('/webhooks', webhookRoutes);
app.use('/api/chat', chatRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});