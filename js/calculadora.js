
const display = document.querySelector("#display");                                              /* el "display" de la calculadora lleva numeral porque tiene "id"*/
const buttons = document.querySelectorAll("button");                                             /* el "Selector es All" porque son todos los botones que estan dentro del <td> */

buttons.forEach((item) => {                                                                      /* este es un arreglo generico de todos los botones, utilizando la constante declarada arriba. Atraves de "item" puedo recorrer todos los botones */
    item.onclick = () => {                                                                       /* a traves de "item" que tiene mapeado todos los botones tomamos el evento click y le damos la funcion de "flecha" para reconocer quien tuvo un click */
        if (item.id == "clear")                                                                  /* si, dentro del arreglo "item" le hice click al boton con el "id clear"*/
            { display.innerText = ""; }                                                          /* entonces en el dispaly de la calculadora lo reemplazo por un texto vacio */
                else if (item.id == "backspace")                                                 /* en el caso de hacer click en un boton del arreglo "item" con el "id backspace"*/
                    { let string = display.innerText.toString();                                 /* guardamos en la variable "string" todo el texto que tenga el display de la calculadora. "toString" convierte todo en una cadena de caracteres o texto */
                    display.innerText = string.substr(0, string.length -1); }                    /* en el diplay de la calculadora, el texto interno va a ser igual a la variable "string, cadena de caracteres" y con "substr" borra los caracteres empezando de "0" y restando -1 */
                        else if (display.innerText != "" && item.id == "equal")                  /* si el texto interno del display de la calculadora es distinto de vacio "y" ademas se presiono el boton con "id, equal" */
                            { display.innerText = eval(display.innerText); }                     /* al aplicar "eval" al texto interno del display de la calculadora va a tomarlo como una operacion aritmetica */
                                else if (display.innerText == "" && item.id == "equal")          /* si en caso que el texto interno del diplay esta vacio y presionamos el boton con el "id, equal" */
                                    { display.innerText = "Null";                                /* si se da la condicion de arriba que muestre un texto "Null" */
                                        setTimeout(() => (display.innerText = ""), 2000); }      /* que limpie todo el texto interno del diplay despues de 2 ms */    
                                            else { display.innerText+=item.id; }                 /* si nada de esto se cumple, que muestre en el diplay lo que cargamos */
    }
})

    const themeToggleBtn = document.querySelector(".theme-toggler");           /* vamos a mapear a traves de "document" para buscar el switch o palanca para cambiar a modo oscuro */
    const calculator = document.querySelector(".calculator");
   
    let isDark = true;                                                         /* variable para confirmar si el modo oscuro esta activado o no , en este caso si */
        themeToggleBtn.onclick = () => {                                       /* cuando hay un evento "onclick" en la variable, sin parametros y con la funcion de flechale dire lo que quiero que haga */
            calculator.classList.toggle("dark");                               /* que la variable "calculator" aplique toda la clase list del switch para el modo oscuro */
            themeToggleBtn.classList.toggle("active");                         /* que la variable aplique la clase list del switch al comando "active" */ 
                isDark = !isDark;                                              /* con este comando vamos modificando el estado del modo oscuro */
        }


// "innerText", texto interior.
// usar siempre los "id" para JS, y la "class" para CSS.
// JS usa el método internamente "toString()" cuando un objeto debe mostrarse como texto (como en HTML) o cuando un objeto debe usarse como una cadena de caracteres.

// el método "substring()" extrae caracteres, entre dos índices (posiciones), de una cadena y devuelve la subcadena. "cadena.substr(inicio, longitud)"
// el indice del primer caracter es "0" a la izquierda, siempre se arranca desde ese valor y el indice del ultimo caracter es la longitud de la cadena -1
// si ponemos -2 va a borrar de a dos caracteres.

// el método "eval()"" evalúa o ejecuta un argumento. Si el argumento es una expresión "eval()" evalúa la expresión. Si el argumento es una o más declaraciones de JS "eval()" ejecuta las declaraciones
// ejecutar en JS desde una cadena es un GRAN riesgo de seguridad. Con "eval()"" el código malicioso puede ejecutarse dentro de su aplicación sin permiso.

// "setTimeout", establecer el tiempo de espera.