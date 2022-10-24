// Objeto e funcao For In
let aluno = {
    nome: "Juliana",
    idade: 15,
    serie: 9
}


function listaPropriedades(aluno) {
    for (const propriedade in aluno) {
    console.log(`${propriedade}: ${aluno[propriedade]}`)
    }
}
console.log(listaPropriedades(aluno))


// Array e funcao For of
const cores = ["vermelho", "azul", "amarelo"]

function listaElementosArray(cores){
    for (const elemento of cores) {
        console.log(`${elemento}`) 
    }
}
console.log(listaElementosArray(cores))
