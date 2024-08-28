let caracteresValidos = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"," "];
let textoNuevo = "";


function asignarTextoElemento(eLemento, texto){
    let elementoHTML = document.querySelector(eLemento);
    elementoHTML.innerHTML = texto;
}

function reemplazarEPorEnter(texto) {
    return texto.replace(/e/g, 'enter');
}

function reemplazarIPorImes(texto) {
    return texto.replace(/i/g, 'imes');
}

function reemplazarAPorAi(texto) {
    return texto.replace(/a/g, 'ai');
}

function reemplazarOPorOber(texto) {
    return texto.replace(/o/g, 'ober');
}

function reemplazarUPorUfat(texto) {
    return texto.replace(/u/g, 'ufat');
}

function aplicarReemplazos(texto) {
    texto = reemplazarEPorEnter(texto);
    texto = reemplazarIPorImes(texto);
    texto = reemplazarAPorAi(texto);
    texto = reemplazarOPorOber(texto);
    texto = reemplazarUPorUfat(texto);
    return texto;
}

function revertirEnterPorE(texto) {
    return texto.replace(/enter/g, 'e');
}

function revertirImesPorI(texto) {
    return texto.replace(/imes/g, 'i');
}

function revertirAiPorA(texto) {
    return texto.replace(/ai/g, 'a');
}

function revertirOberPorO(texto) {
    return texto.replace(/ober/g, 'o');
}

function revertirUfatPorU(texto) {
    return texto.replace(/ufat/g, 'u');
}


function revertirReemplazos(texto) {
    texto = revertirEnterPorE(texto);
    texto = revertirImesPorI(texto);
    texto = revertirAiPorA(texto);
    texto = revertirOberPorO(texto);
    texto = revertirUfatPorU(texto);
    return texto;
}


function encriptarTexto(){
    let textoIngresado = document.getElementById('textoUsuario').value;
    let flag = true;

    console.log(textoIngresado);

    for (let i = 0; i < textoIngresado.length; i++) {
        console.log(textoIngresado[i]);

        if(!caracteresValidos.includes(textoIngresado[i])){
            flag = false;
        }
    }

    console.log(flag);

    if(flag == true){
            textoNuevo = aplicarReemplazos(textoIngresado);
        }
    
    asignarTextoElemento('h2',textoNuevo);
    console.log(textoNuevo);

}

function desencriptarTexto(){
    let textoIngresado = document.getElementById('textoUsuario').value;
    let flag = true;

    console.log(textoIngresado);

    for (let i = 0; i < textoIngresado.length; i++) {
        console.log(textoIngresado[i]);

        if(!caracteresValidos.includes(textoIngresado[i])){
            flag = false;
        }
    }

    console.log(flag);

    if(flag == true){
            textoNuevo = revertirReemplazos(textoIngresado);
        }
    
    asignarTextoElemento('h2',textoNuevo);
    console.log(textoNuevo);

}


