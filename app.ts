let mensagem: string = "Murilo"
console.log(mensagem)

let episode: number = 4

console.log(episode) 
episode = episode + 1
console.log('Next episode is: ' + episode)


let favoriteDroid: string

favoriteDroid = "BB-8"
console.log(favoriteDroid)


let isEnouhtToBeatMF = function (parsecs: number): boolean {
    return parsecs < 12
}

let distance = 11
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon ? ${isEnouhtToBeatMF(distance) ? 'YES' : 'NO'}`)

// arrow function
let call = (nome: string) => console.log(`Do you Copy, ${nome}`)
call('R2')


function inc (speed: number, inc: number  = 1): number {
    return speed + inc
}

console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)


