require("dotenv").config(); //to start process from .env file
const { Client, Intents, Collection } = require("discord.js");

const CLIENT_ID = "910707839092273215";

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS, //adds server functionality
		Intents.FLAGS.GUILD_MESSAGES //gets messages from our bot.
	]
});

const GuildOneCommandFiles = fs.readdirSync("./commands/Guild One").filter(file => file.endsWith(".js"));
const guildonecommands = [];
client.guildonecommands = new Collection();

for (const file of GuildOneCommandFiles) {
	const guildonecommand = require(`./commands/Nugget Dev/${file}`);
	guildonecommands.push(guildonecommand.data.toJSON());
	client.guildonecommands.set(guildonecommand.data.name, guildonecommand);
}

const GuildTwoCommandFiles = fs.readdirSync("./commands/DOD").filter(file => file.endsWith(".js"));
const guildtwocommands = [];
client.guildtwocommands = new Collection();

for (const file of GuildTwoCommandFiles) {
	const guildtwocommand = require(`./commands/DOD/${file}`);
	guildtwocommands.push(guildtwocommand.data.toJSON());
	client.guildtwocommands.set(guildtwocommand.data.name, guildtwocommand);
}

module.exports = client

client.once("ready", () =>{
    try {

        const guildOne = client.guilds.cache.get(process.env.GUILDONE);
		const guildTwo = client.guilds.cache.get(process.env.GUILDTWO);
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILDONE), {body: guildonecommands});
        console.log(`Guild One commands successfully added to ${guildOne.name}`);
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILDTWO), {body: guildtwocommands});
        console.log(`Guild Two commands successfully added to ${guildTwo.name}`);
    } catch (error) {
        console.error(error);
    }
})
client.login(process.env.TOKEN);