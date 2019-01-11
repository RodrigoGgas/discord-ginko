# Ginko

Ginko is a simple to use discord.js bot Framework. It is ideal for people that doesn't know much about coding and want to get a nice bot running.

Help Server [Here](https://discord.gg/DswD9uf "Here")

Some of it feautures are:

  - Command folder with sub folders (if you want to sort by category)
  - Event Folder
  - Simple Structure
  - Descriptive Errors
  - Easy Utils
  - No restrictions
  - Open Source
  - More to come...

# Quick Setup Guide

##### Install discord-ginko

  `npm i discord-ginko`
  
##### Create a index file with the information for your bot
  
```js
const { GinkoClient } = require('discord-ginko')

const client = new GinkoClient({
    ownerID: "owner-id", // --> Your ID probbably
    commandFolder: "./commands", // --> Path to the commands folder (Not Optional)
    eventFolder: "./events", // --> Path to the events folder (Optional)
    prefix: "!" // --> The command prefix
})
client.login("Some-Token")
```
##### Creating a basic command
For example, this could be in ./commands/utility
```js
const { Command } = require('discord-ginko')

module.exports = new Command ({
    name: "ping",
    description: "A basic command",
    category: "Util",
    usage: "!ping",
    
    run: (client, message , args) => {
        message.channel.send("Pong!")
    }
})
```

##### Creating an event
There can not be any subfolders in the event directory.
If there is, Ginko will just ignore it.

```js
const { Events } = require('discord-ginko')

module.exports = new Events ({
    event: "message", // --> The name of the event, for example guildMemberAdd
    run: message => { 
    
    console.log('New Message ' + message)
        
    }
})
```

# Util

Each command information is saved in `client.commandUtil`



### Todo:

 - Add more Utility Functions
 - Premade Agruments

License
----
MIT


