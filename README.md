# Ginko

Ginko es un Framework que usa discord.js para facilitar la creacion de Bots

Servidor de ayuda [Aqui](https://discord.gg/DswD9uf "Aqui")

Algunas de sus funciones:

  - Comandos en carpetas y sub carpetas (categorias)
  - Eventos en Carpeta
  - Estructura simple
  - Errores descriptivos
  - Utilidades faciles
  - Sin restricciones
  - Codigo abierto
  - En español
  - Mas por venir ...

# Inicio Rapido

##### Intala discord-ginko

  `npm i discord-ginko`
  
##### Crea un archivo principal para añadir las opciones
  
```js
const { GinkoClient } = require('discord-ginko')

const client = new GinkoClient({
    ownerID: "owner-id", // --> Probablemente tu ID
    carpetaComandos: "./comandos", // --> Ruta a la carpeta principal de los comandos (No opcional)
    carpetaEventos: "./eventos", // --> Ruta a la carpeta de los eventos (opcional)
    prefijo: "!" // --> El prefijo para los comandos

})
client.login("Algun-Token")
```
##### Crea un comando basico
Por ejemplo, esto puede estar en ./comandos/utilidad
```js
const { Comando } = require('discord-ginko')

module.exports = new Comando ({
    nombre: "ping",
    descripcion: "Un comando basico",
    categoria: "Utilidad",
    uso: "!ping",
    
    run: (client, message , args) => {
        message.channel.send("Pong!")
    }
})
```

##### Creando un evento
No puede haber sub carpetas en los eventos,
si hay, Ginko las va a ignorar.

```js
const { Eventos } = require('discord-ginko')

module.exports = new Events ({
    evento: "message", // --> El nombre del evento, otro ejemplo: guildMemberAdd
    run: message => { 
    
    console.log('Nuevo mensaje ' + message.content)
        
    }
})
```

# Util

Toda la información de los comandos (uso, ctaegoria, etc) en `client.commandUtil`



### Para Hacer:

 - Añadir mas Utilidad
 - Argumentos pre echos

Licensia
----
MIT


