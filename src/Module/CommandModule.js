const fs  = require ('fs')

const path  = require ('path')

const color = require('../Util/Colors')

const GinkoError = require('../Util/GinkoError')

module.exports = { 

CommandModule(commandFolder, commands) { 

var arch2 = [];

        try{
        var files =  fs.readdirSync(commandFolder)
        }catch (e)  {throw new GinkoError('Invalid command Directory') }
            // Here i get all the commands that are inside sub folders in the commandFolder directory
            files.forEach( fil => {

                if(fs.lstatSync(commandFolder + '/' + fil).isDirectory()) {

                    var file = fs.readdirSync(commandFolder + '/' + fil)
                            
                    file.forEach( fill2 => {
                                
                        arch2.push(`/${fil}/${fill2}`)
                               
                    })     
                }
            })
                // Here I get any command that is in the main Command directory
                let arch = files.filter(f => f.split(".").pop() === "js");
        
                var finalFiles = arch.concat(arch2); 
           
                if (finalFiles.length <= 0) throw new GinkoError('I could\'t load any command')
                
            

            // Adding the commands to the Collection
                finalFiles.forEach(f  => {
               
                    let pp = require(path.resolve(commandFolder) + `\\${f}`);
                    
                    console.log(`${color.BgBlue}Command${color.Reset} ${f} loaded successfully!`);
                    console.log(pp)
                    commands.set(pp.name , pp.run);
                })
          
            }

        }