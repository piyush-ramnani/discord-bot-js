# discord-bot-js

RESOURCES:

- https://discord.js.org/
- https://www.youtube.com/watch?v=7A-bnPlxj4k&list=PLRqwX-V7Uu6avBYxeBSwF48YhAnSn_sA4&ab_channel=TheCodingTrain

PREREQUISITES:

- Node.js
- discord.js

CONFIGURATION:

- config.json
- nodemon (for live server refresh)

CODE STRUCTURE:
For fully functional bot, you need three important pieces of code:

- The individual command files [commands], containing their definitions and functionality. For now there are only 3 basic commands the bot can handle [ping.js, server.js, user.js].
- The command handler[index.js], which dynamically reads the files and executes the commands.
- The command deployment script[deployment-commands.js], to register your slash commands with Discord so they appear in the interface.

NOTE:

1. If you create new commands, you should run the deployment script[deployment-commands.js] once.
2. Once the script is run, you can verify by typing '/' in the server to see what all commands you have(see the commands folder).
3. To make the bot online, run the index.js file.
4. You will also see the JSON data in the console when you run any defined command.
