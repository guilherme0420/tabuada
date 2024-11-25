const numero = document.querySelector("#numeroUsuario")
const btnTabuada = document.querySelector("#btnTabuada")
const resultado = document.queryselector("#res")

function resultadoCalculo() {
    resultado.innerHTMl = ""
    var numeroConvertido = Number(numero.value)

    var inicial = 1
    while (inicial <= 10) {

        resultado.innerHTML += `<p>${numeroConvertido} x ${inicial} = ${numeroConvertido * inicial}</p>`

        inicial++
    }
}
btnTabuada.addEventListener("click", resultadoCalculo)

/*
para(primeira, segunda, terceira)

(var inicial = 0, inicial < 10, inicial++)*/

/* for(var inicial = 0; inicial < 10; inicial++)
    alert(incial)
*/
/* var inicial = 0
while(inicial <= 10){
    alert(inicial)

    inicial++
} */

/* var inicial = 120
do {
    alert(inicial)

    inicial++
} while (inicial <= 10); */