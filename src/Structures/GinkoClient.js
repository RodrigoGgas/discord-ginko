
// Local dependencies
const { Collection  , Client } = require('discord.js')

const GinkoError = require('../Util/GinkoError')

const { CommandModule} = require('../Module/ModuloComando')

const { EventModule } = require('../Module/ModuloEvento')

const { Loader } = require('../Module/ModuloCarga')

const { CommandInfo } = require('../Util/CommandInfo')

// Datos para los comandos,eventos y utilidad
const Comandos = new Collection();

const Eventos = new Array;

const CommandWatch = new Array;


class GinkoClient extends Client {

    constructor(opciones = {}, clientOptions) {
        super(clientOptions || opciones)
        /**
         * La id del dueño
         * @type {string}
        */
        this.ownerID = opciones.ownerID;
        /**
         * La ruta para la carpeta de comandos
         * @type {string}
        */
        this.carpetaComandos = opciones.carpetaComandos;
        /**
         * lA ruta para la carpeta de eventos
         * @type {string}
        */
       this.carpetaEventos = opciones.carpetaEventos;
        /**
         * El prefijo
         * @type {string}
        */
        this.prefijo = opciones.prefijo;
    }
    // La funcion login, practicamente maneja todo
    login(token){

        if(!this.prefijo) throw new GinkoError("Tienes que poner un prefijo en las opciones.")

           var Loading = Loader(this.carpetaComandos)

           
      
    // Una vez que entro, en marcha todas la funciones
        super.login(token).then( async () => {

            await CommandInfo(this.carpetaComandos, CommandWatch) 

            this.commandUtil = CommandWatch;

           
            console.log('\nCargabdo Eventos\n')
            if(Loading.complete) EventModule(this.carpetaEventos, Eventos)
    
            console.log(Eventos)
            console.log('\nCargando Comandos\n')

            if(Loading.complete) CommandModule(this.carpetaComandos , Comandos)

            console.log('\nBot online!\n')
           
     
            this.on('message', async message => { 

                if(message.author.bot) return;
                
                if (message.content.indexOf(this.prefijo) !== 0) return;

                let prefix = this.prefijo;
                let messageArray = message.content.split(" ");
                let cmd = messageArray[0]
                let args = message.content.slice(prefix.length).trim().split(/ +/g);
                let cmdarchivo = Comandos.get(cmd.slice(prefix.length));
                if (cmdarchivo) cmdarchivo(this, message, args);
                });
                Eventos.forEach( event => {

                    this.on(event.evento, event.run)
    
                })
        }).catch(e => {
            throw new GinkoError(e)
        })
    }
}
module.exports = GinkoClient;