const fs  = require ('fs')

const LoadCommand = require('../Util/CargarComando')

module.exports = {

Loader(commandFolder) {
       var Loading =  fs.readdirSync(commandFolder)

        var len = parseInt(Loading.length * 2, 10);

        var Loader = new LoadCommand('Cargando Utilidades [:bar] :percent :etas', { total: len });
    
        var timer = setInterval(function () {
          Loader.tick();
          if (Loader.complete) {
            clearInterval(timer);
          }
        }, 100);
        return Loader;


}
}
