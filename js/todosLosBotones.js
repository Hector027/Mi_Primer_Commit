
var btnE = document.getElementById("btn16"),                /* la variable selecciona del documento el elemento que tenga el "id" */
    caja = document.getElementById("caja"),
    contador=0;

    function cambio() {                                     /* "cambio" es el nombre de nuestra funcion */
      
    if(contador==0)                                         /* si el contador es igual a "0" */
        {
            caja.classList.add('azul');                     /* a caja le agregamos el modo azul y ponemos el "contador" en "1"*/
            contador=1;
        }  
    else{
            caja.classList.remove('azul');                  /* sino, a caja le sacamos el modo azul y ponemos el "contador" en "0"*/
            contador=0;
        }
}

            btnE.addEventListener('click',cambio,true)      /* agregar a la variable un evento tipo "click" */
