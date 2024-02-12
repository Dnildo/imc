let form = document.querySelector("#form")
let resultado = document.querySelector('h1')
let altura = document.querySelector('#altura')
let peso = document.querySelector('#peso')
let dataHora = document.querySelector('h2')
let calcular = document.querySelector('#submit')

form.addEventListener('submit', function(Event){
    Event.preventDefault()
    
   resultad()
});

function resultad(){
    resultado = document.querySelector('h1')
    let pesar = peso.value
    let alto = altura.value
   
let result = pesar / alto **2 ;
    
resultado.innerHTML = result;
}
calcular.addEventListener('click', resultad)
/*function zeroAesquerda(){
return num >= 10? num : `0${num}`

}*/
/*function criaData(){
    const diaSemana = data.getDay()
    const numeroMes = data.myds.getTimeMonth()
    
    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes  = getNomeMes(NumeroMes)

    return(
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
        ` de ${data.getFullYear()}` +  
        ${zeroAesquerda(data.getHours())}: ${zeroAesquerda(data.getMinutes())}`
    );
}*/

const h2 = document.querySelector('h2')
const data = new Date();
const opcoes = {
    dateStyle: 'full'
};
h2.innerHTML = data.toLocaleDateString('pt-BR',opcoes);
