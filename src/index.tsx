import "./server.tsx";
import "dotenv/config";
import { Client, Events, SlashCommandBuilder } from "discord.js";
import { SlashCommands } from "./models/enums/slashCommands.js";

const { token } = process.env;

const client = new Client({ intents: [] });

client.once(Events.ClientReady, (c) => {
  console.log(`Logged in as bot ${c.user.username}`);

  const ping = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!");

  const stats = new SlashCommandBuilder()
    .setName("stats")
    .setDescription("Get stats for bergetspung");

  if (client.application) {
    client.application.commands.create(ping);
    client.application.commands.create(stats);
  }
});

client.on(Events.InteractionCreate, (interaction) => {
  // @ts-ignore
  switch (interaction.commandName) {
    case SlashCommands.PING:
      // @ts-ignore
      interaction.reply("Pong!");
      break;

    case SlashCommands.STATS:
      // @ts-ignore
      interaction.reply("Stats!");
    default:
      break;
  }
});

client.login(token);
