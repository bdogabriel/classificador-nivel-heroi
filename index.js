// Se XP for menor ou igual a 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

const levels = {
    1001: "Bronze",
    2001: "Prata",
    5001: "Ouro",
    7001: "Platina",
    8001: "Ascendente",
    9001: "Imortal",
    10001: "Radiante"
}

// função para determinar o nivel
function getLevel(xp) {
    let ret = "Ferro" // inicializo retorno com menor nivel possivel

    comp = Object.keys(levels) // pego as chaves do objeto

    comp = comp.map(el => parseInt(el)).sort((a, b) => a - b) // transformo as chaves em int e ordeno (minha logica precisa de ordenacao)

    comp.forEach(el => {
        // se a xp for maior do que o valor da chave, salvo ela no retorno
        // essa logica vai substituindo o valor do retorno até chegar no level correto do heroi
        // se as chaves nao estiverem ordenadas, pode ser que a funcao retorne um level menor que o real
        if (xp >= el) {
            ret = levels[el]
        }
    });

    return ret
}

let heroName = ""
let heroXp = 0

// importando readline para ler entrada do console
const readline = require("readline")

// interface para ler entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// lendo entrada
rl.question("Digite o nome e a XP do Herói separados por vírgula: ", function (answer) {
    [heroName, heroXp] = answer.split(",")
    heroXp = parseInt(heroXp)
    console.log(`O Herói de nome ${heroName} está no nível de ${getLevel(heroXp)}`)
    rl.close();
});
