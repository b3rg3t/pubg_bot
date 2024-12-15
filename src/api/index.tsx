import "../controllers/PokmonController.tsx";
import "../controllers/KraftonController.tsx";
import "../controllers/TestController.tsx";
import "dotenv/config";
import { Client, Events, SlashCommandBuilder } from "discord.js";
import { SlashCommands } from "../models/enums/slashCommands.js";
import { pubgOperations } from "../operations/pubgOperations.ts";
import { rankedResponse } from "../responses/rankedResponse.ts";

const { token } = process.env;

const client = new Client({ intents: [] });

client.once(Events.ClientReady, (c) => {
  console.log(`Logged in as bot ${c.user.username}`);

  const ping = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!");

  const stats = new SlashCommandBuilder()
    .setName("stats")
    .setDescription("Get stats for player")
    .addStringOption((option) =>
      option
        .setName("player")
        .setDescription("Get stats of $player")
        .setRequired(true)
    );

  if (client.application) {
    client.application.commands.create(ping);
    client.application.commands.create(stats);
  }
});

client.on(Events.InteractionCreate, async (interaction) => {
  const { getPubgPlayerRankedStats } = pubgOperations();
  // @ts-ignore
  switch (interaction.commandName) {
    case SlashCommands.PING:
      // @ts-ignore
      interaction.reply("Pong!");
      break;

    case SlashCommands.STATS:
      const data = await getPubgPlayerRankedStats(
        // @ts-ignore
        interaction.options._hoistedOptions[0].value
      );

      const message = rankedResponse(
        // @ts-ignore
        data,
        // @ts-ignore
        interaction.options._hoistedOptions[0].value
      );
      // @ts-ignore
      // interaction.reply(
      //   `Hello ${interaction.user.username}, total matches: ${
      //     data ? data.data[0].relationships.matches.data.length : "unknown"
      //   }`
      // );
      // @ts-ignore
      interaction.reply(message);
      break;
    default:
      break;
  }
});

client.login(token);
