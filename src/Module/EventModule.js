const fs  = require ('fs')

const path  = require ('path')

const color = require('../Util/Colors')


// The same as the command Module, we will get every file in the events directory [With no sub folders]. 


module.exports = { 

EventModule(eventFolder, event) { 

    try{ 
    var files = fs.readdirSync(eventFolder)
    }catch(e) { 
       return console.log(`${color.BgYellow}${color.FontBlack}Warn:${color.Reset} Could't load any event, this could be due to an error or because you didn't add any, if you didn't add any just ignore this.`) 
     }
        let arch = files.filter(f => f.split(".").pop() === "js");

        if (arch.length <= 0) {
            console.log(`${color.BgYellow}Warn:${color.Reset} Could't load any event, this could be due to an error or because you didn't add any, if you didn't add any just ignore this.`);
           return;
        }

        arch.forEach((f, i) => {

            let pp = require(path.resolve(eventFolder) + `/${f}`);

            console.log(`${color.BgBlue}Event${color.Reset} ${f} loaded successfully!`);

            event.push(pp.event = { event: pp.event , run: pp.run });
        });

    
    }

}