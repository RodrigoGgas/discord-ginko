const fs  = require ('fs')

const path  = require ('path')

const color = require('../Util/Colors')

const GinkoError = require('./GinkoError')


// This will get every command and add the information about them into an Array for later utility.
// It is basically a copy of the CommandModule file, but instead of getting the name and the function, we will get the
// utility of it.

module.exports = { 

CommandInfo(commandFolder, arr) { 

var arch3 = [];

        try{
        var files =  fs.readdirSync(commandFolder)
        }catch (e)  {

            throw new GinkoError("Invalid command Directory")

        } 
           
            files.forEach( fil => {

                if(fs.lstatSync(commandFolder + '/' + fil).isDirectory()) {

                    var file = fs.readdirSync(commandFolder + '/' + fil)
                            
                    file.forEach( fill2 => {
                                
                        arch3.push(`/${fil}/${fill2}`)
                               
                    })     
                }
            })
                let arch = files.filter(f => f.split(".").pop() === "js");
        
                var finalFiles = arch.concat(arch3); 
           
                if (finalFiles.length <= 0) throw new GinkoError('I could\'t load any command')
           
                finalFiles.forEach(f  => {
               
                    let qq = require(path.resolve(commandFolder) + `/${f}`);
                    
                    
                    arr.push({name: qq.name, desc: qq.description , cat: qq.category , usage: qq.usage});
                })
                console.log('\nAssets Loaded with [0] errors\n');
            }

        }