const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000; // You can change the port if needed

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Endpoint to receive SMS messages
app.post('/sms', (req, res) => {
  // Log the incoming payload
  console.log('Received SMS:', req.body);
  
  // You can process the incoming SMS here
  
  // Send a response
  res.status(200).send('SMS received successfully.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
