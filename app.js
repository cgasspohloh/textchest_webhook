const { App } = require('@slack/bolt');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app = express();

// Middleware to parse JSON request body
app.use(bodyParser.json());


// Initializes your app with your bot token and signing secret
const bot = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN
});

// Call the bot start function
bot.message('start', async ({ message, say }) => {
    await say("Testing this out");
});
  

// Launch the bot/app
(async () => {
    // Start your app
    await bot.start(PORT);
    console.log('⚡️ Bolt app is running!');
})();

// Endpoint to receive SMS messages
app.post('/sms', (req, res) => {
  // Log the incoming payload
  console.log('Received SMS:', req.body); 
  
  bot.client.chat.postMessage({
    channel: 'textchest', // Replace with your Slack channel ID
    text: `New SMS Received: ${JSON.stringify(req.body)}`
  });
  // You can process the incoming SMS here
  
  // Send a response
  res.status(200).send('SMS received successfully.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


