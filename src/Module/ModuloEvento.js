const fs  = require ('fs')

const path  = require ('path')

const color = require('../Util/Colors')





module.exports = { 

EventModule(eventFolder, event) { 

    try{ 
    var files = fs.readdirSync(eventFolder)
    }catch(e) { 
       return console.log(`${color.BgYellow}${color.FontBlack}Warn:${color.Reset} No pude cargar ningun evento, esto puede ser porque no pusiste nignuno o por un error, si no tienes ningun evento ignora esto.`) 
     }
        let arch = files.filter(f => f.split(".").pop() === "js");

        if (arch.length <= 0) {
            console.log(`${color.BgYellow}Warn:${color.Reset}  No pude cargar ningun evento, esto puede ser porque no pusiste nignuno o por un error, si no tienes ningun evento ignora esto.`);
           return;
        }

        arch.forEach((f, i) => {

            let pp = require(path.resolve(eventFolder) + `/${f}`);

            console.log(`${color.BgBlue}Evento${color.Reset} ${f} cargado!`);

            event.push(pp.evento = { evento: pp.evento , run: pp.run });
        });

    
    }

}