
//ALERTA RECORDATORIO
function recordatorio() {
    alert("Tomar Pastilla 17:00hrs.")                                                /* alert es una palabra reservada */
}


// CAMBIAR EL TEXTO
var nombre = "Luis";                                                                 /* variable tipo "string", son "key sensitive" */
var apellido = " Perez";                                                             /* colocar espacio en apellido para que en la concatenacion no se "peguen" */
//document.getElementById("titulo").innerHTML = nombre + apellido ;                  /* con "document" accedemos a todo el HTML (parte del "DOM") y obtenemos un elemento identificado por su "id" */
//                                                                                   /* "innerHTML" es una propiedad que cambia el contenido de "h2" */


// RELOJ
(function() {

    var actualizarHora = function() {                                                /* funcion "actualizarHora" que se encarga de mostrar la hora en pantalla y se actualiza cada segundo */
        var fecha = new Date(),                                                      /* el Date()constructor puede crear una "Date" instancia o devolver una cadena que represente la hora actual (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) */
            horas = fecha.getHours(),                                                /* el método "getHours()"" retorna la hora de la fecha especificada, de acuerdo a la hora local, (lo toma de la pc) */
            ampm,
            minutos = fecha.getMinutes(),                                            /* el método getMinutes() devuelve los minutos de la fecha especificada en función de la hora local */
            segundos = fecha.getSeconds(),                                           /* el método getSeconds() devuelve los segundos en la fecha especificada de acuerdo a la hora local */
            diaSemana = fecha.getDay(),                                              /* el método getDay() devuelve el día de la semana de la fecha especificada en función de la fecha local; siendo 0 (Domingo) el primer día */
            dia = fecha.getDate(),                                                   /* el método getDate() devuelve el día del mes para la fecha especificada de acuerdo con la hora local */
            mes = fecha.getMonth(),                                                  /* el método getMonth() devuelve el mes del objeto Date según la hora local, donde el número cero indica el primer mes del año */
            year = fecha.getFullYear();                                              /* el método getFullYear() devuelve el año de la fecha indicada acorde a la hora local */
            /* todas estas variables nos traen el valor pero no podemos mostrarla en pantalla */

        var pHoras = document.getElementById('horas'),                               /* declaramos estas variables con la "p" de parrafo y las obtenemos por medio de su "id" a traves del documento del "DOM" */
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');
            /* todas estas variables nos traen el valor pero no podemos mostrarla en pantalla */

        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];       /* con la "var" semana que es un "array" ordenado como esta, muy importante. Ya podemos mostrar el dia de la semana en pantalla, siendo el Domingo = (0) */
            pDiaSemana.textContent = semana[diaSemana];                                                /* la propiedad "textContent" establece o devuelve el contenido de texto de un elemento especificado y todos sus descendientes */
            /* en "diaSemana" aparece un valor numerico del "0 al 6", como "semana" es nuestro array el valor numerico que trae concidira con la posicion numerica del dia de nuestro array */
            
            pDia.textContent = dia;                                                                    /* utilizamos la "p" de parrafo */ 

        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];    /* con la "var" meses que es un "array" ordenado como esta, muy importante. Ya podemos mostrar el mes del año en pantalla, siendo el Enero = (0) */
            pMes.textContent = meses[mes];                                                             /* la propiedad "textContent" establece o devuelve el contenido de texto de un elemento especificado y todos sus descendientes */
            /* en "mes" aparece un valor numerico del "0 al 11", como "meses" es nuestro array el valor numerico que trae concidira con la posicion numerica del mes de nuestro array */

            pYear.textContent = year;

            if (horas >= 12) {                                                    /* ponemos un condicional "if" para transformar un reloj de 24hrs en uno de 12hrs */ 
                horas = horas - 12;
                ampm = 'PM';                                                      /* si es >= 12 es la tarde "PM" */
            }   else {
                ampm = 'AM'; 
            }

            if (horas == 0) {                                                     /* aca decimos que si nuestra horas es = (0) que muestre en la variable "horas" 12 */
                horas = 12;
            }

            pHoras.textContent = horas;                                           /* la propiedad "textContent" establece o devuelve el contenido de texto de un elemento especificado y todos sus descendientes */
            pAMPM.textContent = ampm;

            if (minutos < 10) { minutos = "0" + minutos };                        /* ponemmos este condicional para que en pantalla no aparezca "1" sino "01" con los minutos */
            if (segundos < 10) { segundos = "0" + segundos };                     /* ponemmos este condicional para que en pantalla no aparezca "1" sino "01" con los segundos */

            pMinutos.textContent = minutos;                                       /* la propiedad "textContent" establece o devuelve el contenido de texto de un elemento especificado y todos sus descendientes */
            pSegundos.textContent = segundos;
    };

            actualizarHora();                                                     /* llamo a la funcion "actualizarHora" para que se ejecute automaticamente cada segundo, que fue declarada al principio del ejercicio */
            var intervalo = setInterval(actualizarHora, 1000);                    /* la propiedad "setInterval" recibe 2 parametros, llama repetidamente a una función o ejecuta un fragmento de código, con un retraso de tiempo fijo entre cada llamada.*/

} ());



// CALCULADORA SUMAR
/* var ent1 = document.querySelector ("entrada1") */                             /* esta es una forma de acceder como la sentencia de abajo */
var txtn1 = document.getElementById("entrada1");                                 /* (si declaro una constante para las variables el "Reloj" no funciona), utilice "var" para capturar el numero en la entrada 1 */
var txtn2 = document.getElementById("entrada2");  
var respuesta = document.getElementById("resultado"); 
var btncalcular = document.getElementById("calcular");
btncalcular.addEventListener('click',calcular);

function calcular(){                                                             /* la funcion tiene que tener el mismo nombre (id) del boton para poder capturar el evento click */
    let op1 = parseFloat(txtn1.value);
    let op2 = parseFloat(txtn2.value);
    let sumatotal = op1 + op2;
    respuesta.innerText = sumatotal;
    respuesta.style="color:red";
};