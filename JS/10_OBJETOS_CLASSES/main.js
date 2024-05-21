//Eventos
const boasVindas = () => {
    alert('Bem vindo a nossa página')
    console.log('Bem vindo a nossa página')
}

const eventClique = () => {
    console.log('Você clicou no botão')
}

const mouseEmCima = () => {
    console.log('Mouse está em cima do título')
}

//Classes
console.clear()
class Carro {
    constructor (nome, ano) {
        this.nome = nome // this(esse)
        this.ano = ano 
    }
}

//Instanciando objetos a classe
let meuCarro1 = new Carro('Ford', 2014)
let meuCarro2 = new Carro('Audi', 2019)

//Imprimindo valores
console.log(meuCarro1.nome)
console.log(meuCarro1.ano)

console.log(meuCarro2.nome)
console.log(meuCarro2.ano)

//Declarar nova classe com métodos
console.clear()
class NovoCarro {
    constructor(nome, ano) {
        this.nome = nome
        this.ano = ano
    }
    idadeCarro(ano) {
        return ano - this.ano
    }
}

//Buscando o ano atual automaticamente
let dataHoje = new Date()
let ano = dataHoje.getFullYear()
//console.log(dataHoje)

//Instanciando o objeto a classe
let meuNovoCarro = new NovoCarro('Ford', 2014)
console.log(meuNovoCarro.idadeCarro(ano))

//Atividade valendo ponto
console.clear()
let dataToday = new Date()
let dia = dataToday.getDate()
let mês = dataToday.getMonth()
let year = dataToday.getFullYear()
let hora = dataToday.getHours()

console.log (dataToday)
console.log (dia)
console.log (mês)
console.log (year)
console.log (hora)


