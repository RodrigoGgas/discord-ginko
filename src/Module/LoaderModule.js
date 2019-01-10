const fs  = require ('fs')

const LoadCommand = require('../Util/LoadCommand')

module.exports = {

Loader(commandFolder) {
       var Loading =  fs.readdirSync(commandFolder)

        var len = parseInt(Loading.length * 2, 10);

        var Loader = new LoadCommand('Loading Assets [:bar] :percent :etas', { total: len });
    
        var timer = setInterval(function () {
          Loader.tick();
          if (Loader.complete) {
            clearInterval(timer);
          }
        }, 100);
        return Loader;


}
}
