function calcularMedia( notas ) {

    var soma = 0;
for( c = 0; c < notas.length; c++ ) {
    soma += notas[c];
}

media = soma / notas.length;

return media;
}

let media; //escopo global

function aprovacao( notas ) {

let media = calcularMedia( notas ); //escopo da funcao 

let condicao = media >= 7 ? "aluno aprovado" : "aluno reprovado";

return 'Media: ' + media + ' -Resultado: ' + condicao;


}

//console.log()

//console.log( " Media:" + calcularMedia( [ 8.8 ] ) )
//console.log( aprovacao( calcularMedia( [ 8.8 ] ) ) )
//console.log( aprovacao( [ 8,7,5 ] ) )
//console.log( aprovacao( [ 8,9,6 ] ) )
//console.log( "Media:" + calcularMedia( [ 7,9 ] ) )
//console.log( aprovacao( calcularMedia( [ 7.9 ] ) ) )

//Funçoes Recursivas

function contagemRegressiva(numero){

console.log(numero);

let proximoNumero = numero - 1;

if(proximoNumero > 0)

contagemRegressiva(proximoNumero);


}

//contagemRegressiva(10);

document.addEventListener('submit', function( evento ){

    evento.preventDefault();

    let formulario = document.getElementById("formulario-01")

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);

        notas.push(parseIntdados.get(key));
    }

    console.log(notas);
    
    console.log(objeto);

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = texto;

});

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');

for( let emfoco of camposObrigatorios)
    validaCampo(emfoco);

function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if( this.value == '') {
            document.querySelector('.mensagem').innerHTML="Verifique o preenchimento dos campos em vermelho"
            this.classlist.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML - "" ;
            this.classlist.remove('erro');
    }
});

}


