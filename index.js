var imagenes = [];
var indice = 1;
for(var i = 1; i<4; i++){
    imagenes[i] =  `img/img${i}.jpeg`
    console.log(imagenes[i]);
}

window.addEventListener('load',()=>{
    setInterval(() => {
        cabiarImagenes();
    }, 3000);
})

function cabiarImagenes(){
    document.slaider.src= imagenes[indice];
    if(indice < 3){
        indice++;
    }
    else{
        indice =1;
    }
    
}