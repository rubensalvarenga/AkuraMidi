function tocaSom(idElementoAudio){

    
   const elemento = document.querySelector(idElementoAudio);


   if(elemento != null && elemento.localName === 'audio'){
        
        elemento.play() 
        
    }else{
        alert('Elemento errado !')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');





for(let contador =0; contador < listaDeTeclas.length; contador++){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    tecla.onclick = function(){
    idAudio = `#som_${instrumento}`; 
    tocaSom(idAudio);
    }

    tecla.onkeydown = function(e){

        if(e.code === 'Space' || e.code ==='Enter' )  {
        tecla.classList.add('ativa') 
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}
