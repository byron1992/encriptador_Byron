const ingresoTexto =document.getElementById("ingresoTexto");

const botonEncriptar =document.getElementById("botonEncriptar");

const botonDesencriptar =document.getElementById("botonDesencriptar");

const botonCopiar =document.getElementById("botonCopiar");

const mensajeFinal =document.getElementById("mensajeFinal");

const muneco =document.getElementById("muneco");

const derechaInfo =document.getElementById("derechaInfo");

const derecha =document.getElementById("derecha");
let remplazar= [
    ["e", "enter"],
    ["o", "ober"],
    ["a", "ai"],
    ["i", "imes"],
    ["u", "ufat"],
]

botonEncriptar.addEventListener("click", ()=>{
    const texto = ingresoTexto.value.toLowerCase()
    function encriptar(newText){
        for(let i=0; i< remplazar.length; i++){
            if (newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0],remplazar[i][1]);
            };
        };
        return newText
    }
    const textoEncriptado =encriptar(texto);
    mensajeFinal.innerHTML=textoEncriptado;
    muneco.style.display="none";
    derechaInfo.style.display="none";
    botonCopiar.style.display="block";
    derecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
})