// Maria Castro 
/*retroalimentación de Julio Recillas: excelente lógica de programación,
buen manejo de estrés al momento de realizar evaluación, buena limpieza y buenas practicas.*/
//Ejercicio 1
let palabrasArray=['insecto', 'bootcamp', 'escritorio', 'silla','amigo', 'perrito', 'casa', 'michi', 'camino', 'zapatos'];
let palabra="casa";
let mostrar=[];

for(let i=0;i<palabrasArray.length;i++){
   
    if(palabrasArray[i].length>palabra.length){
        mostrar[i] =palabrasArray[i];
    }
}
console.log(mostrar);
//Ejercicio 2

//Declarando array
let array=['insecto', 'bootcamp', 'escritorio', 'silla','amigo', 'perrito', 'casa', 'michi', 'camino', 'zapatos'];
console.log(array);
//Obteniendo el elemento ul
const listado=document.getElementById('listado');
//Funcion para mostrar elementos
function mostrarLista(array){
for(let i=0; i<array.length; i++){
    console.log(array[i]);
    let elemento=document.createElement('li');
    elemento.textContent=array[i];
    listado.appendChild(elemento);
}
}

mostrarLista(array);

