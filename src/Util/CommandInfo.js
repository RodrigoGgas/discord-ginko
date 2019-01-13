const fs  = require ('fs')

const path  = require ('path')

const color = require('../Util/Colors')

const GinkoError = require('./GinkoError')



module.exports = { 

CommandInfo(commandFolder, arr) { 

var arch3 = [];

        try{
        var files =  fs.readdirSync(commandFolder)
        }catch (e)  {

            throw new GinkoError("Ruta a los comandos invalida")

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
           
                if (finalFiles.length <= 0) throw new GinkoError('No pude cargar ningun comando')
           
                finalFiles.forEach(f  => {
               
                    let qq = require(path.resolve(commandFolder) + `/${f}`);
                    
                    
                    arr.push({nombre: qq.nombre, desc: qq.descripcion , cat: qq.categoria , uso: qq.uso});
                })
                console.log('\nAssets Loaded with [0] errors\n');
            }

        }
