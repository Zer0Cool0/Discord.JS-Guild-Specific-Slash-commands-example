const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pong")
        .setDescription("Replies with ping"),
    async execute(interaction) {
        interaction.reply({ content: "ping", ephemeral: true });
    }
}