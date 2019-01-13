const color = require('./Colors')

class GinkoError extends Error {
        /**
        * @param {string} error El error
        * @private
        */
        constructor(error) {
          
          super();
          this.name = `${color.BgRed}Discord-Ginko-Error${color.Reset}`
    
        /**
        * El mensaje que se pasa al error
        * @type {string} 
        */
        this.message = error; 
        }
      }


module.exports = GinkoError;