import "./server.tsx"
import 'dotenv/config';
import { Client, Events, SlashCommandBuilder } from "discord.js";

const token = process.env.TOKEN;

const client = new Client({ intents: [] });

client.once(Events.ClientReady, (c) => {
  console.log(`Logged in as ${c.user.username}`);

  const ping = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!");

  if (client.application) {
    client.application.commands.create(ping);
  }
});

client.on(Events.InteractionCreate, (interaction) => {
  // @ts-ignore
  if (interaction.commandName === "ping") {
    // @ts-ignore
    interaction.reply("Pong!");
  }
});

client.login(token);
