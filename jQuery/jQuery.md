# jQuery
"write less, do more"
- Biblioteca de JavaScript 
- Carregamento rápido
- Converte para JS (ECMAScript) padrao
- Crossbrowser: funciona em diversos navegadores
- Escrever um cófigo para todos os navegadores
- Rapida captura e transmissao de dados
- Manipula o DOM
- Facilita a consulta (query) a elementos
- Extensível com plugins
- Instalaçao: https://jquery.com/download

## Seletores
### Seletores Simples 

    $('h4') // tag
    $('.featured-item') // class
    $('#featured') // id

### Seletores Compostos

    $('h4, h6')
    $ ('div h4') // seleciona todos h4 que tiver depois de uma div
    $('h4:first-child').text('titulo alterado')