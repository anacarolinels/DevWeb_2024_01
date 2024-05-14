let matrix1=[
[1,2,3],
[4,5,6],
]
console.log('Antes:')
console.log(matrix1)

//Alterando um valor do array
console.clear()
matrix1[0][2]= -10
console.log('Depois')
console.log(matrix1)

//Método tostring (Transforma o objeto em string)
console.clear()
let numArray=[1,2,3,4]
console.log(typeof numArray)

let numArray2=numArray.toString()
console.log(typeof numArray2)

//Join (Converte array em string)
console.clear()
let teste1=[0,1,2,3,4,5]
let teste2=teste1.join('***')

console.log(teste2)
console.log(typeof teste2)

//Length (Tamanho Array)
console.clear()
let array=[0,1,2,3,4]
console.log(array.length)

//Pop (Remove o último conteúdo da lista)
console.clear()
const frutas1=['Banana','Laranja','Maçã','Manga']
let x=frutas1.pop()
console.log(frutas1)
console.log(x)

//Push (Insere um novo elemento e retorna o novo tamanho do array)
console.clear()
const frutas2=['Banana','Laranja','Maçã','Manga']
let y=frutas2.push('Kiwi')
console.log(frutas2)
console.log(y)


//Shift (Remove o elemento no início do array)
console.clear()
const frutas3=['Banana','Laranja']
let z=frutas3.shift() //z=Banana
console.log(frutas3)
console.log(z)

//Unshift (Insere um elemento no início do array)
console.clear()
const frutas4= ['Banana','Laranja']
let w=frutas4.unshift('Kiwi') //w=3
console.log(frutas4)
console.log(w)

//Delete (Apaga uma elemento na posição desejada)
console.clear()
const frutas5=['Banana','Laranja','Maçã','Manga']
delete frutas5[2]
console.log(frutas5)

//Criando uma função no JS
console.clear()
function addNums(num1=1,num2=1){
return num1 +num2 
}

//Chamando a função addNums
let uatizap =addNums(4,5)
console.log(uatizap)

//Chamando a função myFunc antes da declaração da função
let xiquexique =myFunc(4,5)
console.log(xiquexique)

function myFunc(num1, num2) {
return num1 * num2;
}
   
//Arrow function
console.clear()
const hello=() => {
return 'Olá xique xique'
}
console.log(hello)
console.log(hello())

console.clear()
const addNums2=(num1=1, num2=1)=>{
return num1+num2
}
let soma=addNums2(5,10)
console.log(soma)




