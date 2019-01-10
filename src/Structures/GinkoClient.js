
// Local dependencies
const { Collection  , Client } = require('discord.js')

const GinkoError = require('../Util/GinkoError')

const { CommandModule} = require('../Module/CommandModule')

const { EventModule } = require('../Module/EventModule')

const { Loader } = require('../Module/LoaderModule')

const { CommandInfo } = require('../Util/CommandInfo')

// instance of the command and event
const Commands = new Collection();

const Events = new Array;

const CommandWatch = new Array;


class GinkoClient extends Client {

    constructor(options = {}, clientOptions) {
        super(clientOptions || options)
        /**
         * The Discord ID of the user.
         * @type {string}
        */
        this.ownerID = options.ownerID;
        /**
         * The path to the Commands Direcotry 
         * @type {string}
        */
        this.commandFolder = options.commandFolder;
        /**
         * The path to the Commands Direcotry 
         * @type {string}
        */
       this.eventFolder = options.eventFolder;
        /**
         * The prefix used to run the commands
         * @type {string}
        */
        this.prefix = options.prefix;
    }
    // The login Function, the one that also handles Everything basically (because im lazy)
    login(token){

        if(!this.prefix) throw new GinkoError("You have to set the prefix in the client options.")

           var Loading = Loader(this.commandFolder)

           
        
    // Once the bot is logged in, lets get the commands and events working 
        super.login(token).then( async () => {

            await CommandInfo(this.commandFolder, CommandWatch) 

            this.commandUtil = CommandWatch;


            console.log('\nLoading Events\n')
            if(Loading.complete) EventModule(this.eventFolder, Events)
    

            console.log('\nLoading Commands\n')

            if(Loading.complete) CommandModule(this.commandFolder , Commands)

            console.log('\nBot online!\n')
           
        
             // The message event wich will handle the commands   
            this.on('message', async message => { 

                if(message.author.bot) return;
                
                if (message.content.indexOf(this.prefix) !== 0) return;
                
                let prefix = this.prefix;
                let messageArray = message.content.split(" ");
                let cmd = messageArray[0]
                let args = message.content.slice(prefix.length).trim().split(/ +/g);
                let cmdarchivo = Commands.get(cmd.slice(prefix.length));
                if (cmdarchivo) cmdarchivo(this, message, args);

                });

                Events.forEach( event => {

                    this.on(event.event, event.run)
    
                })

        }).catch(e => {
            throw new GinkoError(e)
        })

    }
}
module.exports = GinkoClient;