# discord-bot-js

#RESOURCES:

- https://discord.js.org/

#PREREQUISITES:

- Node.js
- discord.js

#CONFIGURATION:

- config.json
- nodemon (for live server refresh)

#CODE STRUCTURE:
For fully functional bot, you need three important pieces of code:

- The individual command files [commands], containing their definitions and functionality. For now there are only 3 basic commands the bot can handle [ping.js, server.js, user.js].
- The command handler[index.js], which dynamically reads the files from `commands` folder and executes the commands.
- The event handler[index.js], that handles all the events in the `events` folder
- The command deployment script[deployment-commands.js], to register your slash commands with Discord `once` so they appear in the interface.

#WORKING:

1. If you create new commands, you should run the deployment script[deployment-commands.js] once.
2. Once the commands are deployed, make the bot online, run the [index.js] file.
3. you can verify by typing '/' in the server to see what all commands you have(see the commands folder).
4. You will also see the JSON data in the console when you run any defined command.
