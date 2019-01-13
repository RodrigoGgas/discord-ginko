class Comando {

    constructor(options = {}){ 

        this.run = options.run

        this.nombre = options.nombre

        this.descripcion = options.descripcion

        this.caregoria = options.caregoria

        this.uso = options.uso 

        this.ownerOnly = false
    }
}
module.exports = Comando;
