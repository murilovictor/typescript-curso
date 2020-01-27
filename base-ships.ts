class Spacecraft {

    constructor(public propulsar: string) {}

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsar}`)
    }
}

interface Containership {
    cargoContainers: number
}

export {Spacecraft, Containership}