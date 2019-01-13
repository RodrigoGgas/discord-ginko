const fs  = require ('fs')

const path  = require ('path')

const color = require('../Util/Colors')

const GinkoError = require('../Util/GinkoError')

module.exports = { 

CommandModule(commandFolder, commands) { 

var arch2 = [];

        try{
        var files =  fs.readdirSync(commandFolder)
        }catch (e)  {throw new GinkoError('Ruta de comandos invalida') }
          
            files.forEach( fil => {

                if(fs.lstatSync(commandFolder + '/' + fil).isDirectory()) {

                    var file = fs.readdirSync(commandFolder + '/' + fil)
                            
                    file.forEach( fill2 => {
                                
                        arch2.push(`/${fil}/${fill2}`)
                               
                    })     
                }
            })
            
                let arch = files.filter(f => f.split(".").pop() === "js");
        
                var finalFiles = arch.concat(arch2); 
           
                if (finalFiles.length <= 0) throw new GinkoError('No pude cargar ningun comando')
                
            

           
                finalFiles.forEach(f  => {
               
                    let pp = require(path.resolve(commandFolder) + `/${f}`);
                    
                    console.log(`${color.BgBlue}Comando${color.Reset} ${f} cargado!`);
                    commands.set(pp.nombre , pp.run);
                })
          
            }

        }