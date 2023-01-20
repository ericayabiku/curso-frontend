
# DOM

- Document Object Model
- Estrutura de um arquivo na web
- Representa documentos HTML ou XML
- Interface de programaçao
- NAO é uma linguagem de programaçao
- É essencial para o JS entender o modelo de páginas web

## Pra que serve?

- Alteral a estrutura
- Alterar o estilo
- Alterar o conteúdo

## Como?

- Disponibilizando API (Application Programming Interface)
- Rotinas e padroes estabelecidos
- Métodos (funçoes)
- Árvore de elementos
- Seletores
- Objetos

 ## DOM x JS

 - O DOM pode ser usado por outras linguagens 
 - Sem o DOM o JS nao teria noçao da pagina

 ## Vantagens de usar JavaScript

 - Código é executado por navegadores
 - Tornar as páginas dinamicas
 - Evitar Requisiçoes desnecessárias (performance)
 - SPA (Single Page Applications)
 - Reagir rapidamente a açoes dos usuarios

## Desvantagens de usar JavaScript

- Código é executado por navegadores
- O conteúdo NAO fica visivel para indexadores de busca
- Alteraçoes em tempo de execuçao nao ficam salvas no documento

## Exemplos 

Seleciona o objeto e disponibiliza métodos ( métodos / funçoes).callback

- document.getElementById(id)
- document.getElementsByTagName('div')
- document.CreateElement('div')
- parentNode.appendChild(node) // html.appendChild('body')
- element.innerHTML
- element.style
- element.setAttribute('name').value
- element.getAttribute('name')
- element.addEventListener()
- window.location
- window.onload (en-US)
- console.log()
- window.scrollTo(x, y)

## Seletores
- Tipos de seletores: Tag, ID, Class, Name, Query
- Callback
- getElementById()
- getElementsByTagName()
- getElementsByName()
- getElementsByClassName()
- querySelectorAll() // # para id ou . para class

## Formulários
- Precisamos evitar que o usuário passe dados incorretos
- Direcionar melhor o uso do nosso sistema
- Proteger a injeçao de código malicioso
- Evitar erros de procesamento
- Formatar dados para facilitar o processamento
- Regex (expressoes regulares)





## Referencias 
- DOM: https://dom.spec.whatwg.org/
- Tecnologias em JS: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/JavaScript_technologies_overview
- Motores de execuçao: wikipedia (lista de motores de execuçao)


