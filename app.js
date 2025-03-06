// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosArr = [];

function agregarAmigo(){
  let amigo = document.getElementById('amigo').value;
  if(amigo == undefined || amigo == ''){
    alert('¡avor de agregar un nombre válido!');
  }else{
    amigosArr.push(amigo);
    document.getElementById('amigo').value = '';
    monstrarListaAmigos(amigosArr);
  }
}


function monstrarListaAmigos(amigosArr){    
  let elementosLista = '';
  amigosArr.forEach(
    function(amigo){
      elementosLista += `<li>${amigo}</li>`;
    }
  );
  modificarLista("listaAmigos",elementosLista); 
}

function modificarLista(listaId,valores){
  let lista = document.getElementById(listaId);
  lista.innerHTML = valores;  
}

function sortearAmigo(){  
  if(amigosArr.length == 0){
    alert('Tienen que existir amigos en la lista, para poder mostrar el amigo secreto.');    
  }else{
    let numeroGenerado =  Math.floor(Math.random()*amigosArr.length)+1;
    let amigoSecreto = amigosArr[numeroGenerado-1];
    modificarLista("resultado",`<li>El amigo secreto es ${amigoSecreto}</li>`); 
    modificarLista("listaAmigos","");
    amigosArr = []; 
  }
}