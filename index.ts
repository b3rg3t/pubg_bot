require("./server.ts");
const { Client, Events, SlashCommandBuilder } = require("discord.js");

const token = process.env.TOKEN;

const client = new Client({ intents: [] });

client.once(Events.ClientReady, (c) => {
  console.log(`Logged in as ${c.user.username}`);

  const ping = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!");

  client.application.commands.create(ping);
});

client.on(Events.InteractionCreate, (interaction) => {
  if (interaction.commandName === "ping") {
    interaction.reply("Pong!");
  }
});

client.login(token);
