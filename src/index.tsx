import "../src/controllers/PokmonController.tsx";
import "../src/controllers/KraftonController.tsx";
import "../src/controllers/TestController.tsx";
import "dotenv/config";
import { Client, Events, SlashCommandBuilder } from "discord.js";
import { SlashCommands } from "./models/enums/slashCommands.js";
import { pubgProvider } from "./providers/pubgProvider.ts";
import { playerType } from "./models/types/playerType.ts";
import { pubgOperations } from "./operations/pubgOperations.ts";

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

client.on(Events.InteractionCreate, async (interaction) => {
  const { getPubgPlayerRankedStats } = pubgOperations();
  // @ts-ignore
  switch (interaction.commandName) {
    case SlashCommands.PING:
      // @ts-ignore
      interaction.reply("Pong!");
      break;

    case SlashCommands.STATS:
      const data = await getPubgPlayerRankedStats("bergetspung");
      // @ts-ignore
      // interaction.reply(
      //   `Hello ${interaction.user.username}, total matches: ${
      //     data ? data.data[0].relationships.matches.data.length : "unknown"
      //   }`
      // );
      // @ts-ignore
      interaction.reply(
        `Hello ${interaction.user.username}`
      );
      break;
    default:
      break;
  }
});

client.login(token);
