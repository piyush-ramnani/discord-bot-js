const { Client, Events, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//runs once when client is ready
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! logged in as ${c.user.tag}`);
});

//Logging in discord
client.login(token);
