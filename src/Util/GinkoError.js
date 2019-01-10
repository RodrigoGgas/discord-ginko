const color = require('./Colors')

class GinkoError extends Error {
        /**
        * @param {string} error The error
        * @private
        */
        constructor(error) {
          
          super();
          this.name = `${color.BgRed}Discord-Ginko-Error${color.Reset}`
    
        /**
        * The error message that was provided
        * @type {string} 
        */
        this.message = error; 
        }
      }


module.exports = GinkoError;