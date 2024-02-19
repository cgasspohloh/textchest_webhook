const { bot } = require("./bot");

const PORT = process.env.PORT || 8080;

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

