//JavaScript e DOM
//objeto document
console.log(document)

//Acessar informações
console.clear()
console.log(document.domain)
console.log(document.URL)
console.log(document.title)
console.log(document.head)
console.log(document.body)

//Alterar o título
document.title = 123
//Criar elemento <h1>
let heading = document.createElement('H1')
heading.innerHTML = 'Olá alunos!' //define e retorna o conteúdo de um elemento html
document.body.appendChild(heading) //adiciona o elemento criado em um pai específico
heading.style.borderBottom = 'solid 3px #000'