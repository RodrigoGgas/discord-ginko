class Command {

    constructor(options = {}){ 

        this.run = options.run

        this.name = options.name

        this.description = options.description

        this.category = options.category

        this.usage = options.usage 

        this.ownerOnly = options.ownerOnly || false
    }
}
module.exports = Command;
