# Discord.JS-MultiGuild-Slash-Command-Example


## How to Install Example
1. Clone repository

2. Fill in necessary information in the .env file. Token is your bot token and the two guild settings are the two guild ids

3. run - npm install to get necessary modules

4. npm run dev to start bot

## Adding More Guilds
You can do this for as many guilds as you would like:

1. Create new folder in the commands directory

2. Create command in that new folder

3. Add GUILDTHREE=ID to the .env file

4. Add this to your bot.js file:
```js 
const GuildThreeCommandFiles = fs.readdirSync("./commands/Guild Three").filter(file => file.endsWith(".js"));
const guildthreecommands = [];
client.guildthreecommands = new Collection();

for (const file of GuildThreeCommandFiles) {
	const guildthreecommand = require(`./commands/Guild Three/${file}`);
	guildthreecommands.push(guildthreecommand.data.toJSON());
	client.guildthreecommands.set(guildthreecommand.data.name, guildthreecommand);
}
```
```js
const guildThree = client.guilds.cache.get(process.env.GUILDTHREE);

await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILDTWO), {body: guildthreecommands});
console.log(`Guild Three commands successfully added to ${guildThree.name}`);
```
