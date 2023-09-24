import { settings } from "@/settings";
import { Command } from "@discord/base";
import { hexToRgb } from "@magicyan/discord";
import { ApplicationCommandType, EmbedBuilder } from "discord.js";

new Command({
  name: "ping",
  dmPermission,
  description: "reply with api latency",
  type: ApplicationCommandType.ChatInput,
  async run(interaction) {
    const date = new Date();
    await interaction.reply({
      ephemeral,
      embeds: [
        new EmbedBuilder({
          description: "Getting ping...",
          color: hexToRgb(settings.colors.theme.info),
        }),
      ],
    });

    interaction.editReply({
      embeds: [
        new EmbedBuilder({
          description: `${new Date().getTime() - date.getTime()}ms`,
          color: hexToRgb(settings.colors.theme.success),
        }),
      ],
    });
  },
});
