//RESUELVE LOS EJERCICIOS AQUÍ
/* 1 */
//const ana = empleados.find(empleado=>empleado.name==="Ana")
/* 2 */
//const luis = empleados.find(empleado=>empleado.name==="Luis");
//const emailLuis = luis?luis.email:null;
//console.log(emailLuis);
/* 3 */
let a = 5;
let b = 3;
[a, b] = [b, a];
console.log(a)
console.log(b)

/* 4 */
/* const {today: maximaHoy, tomorrow: maximaManana} = HIGH_TEMPERATURES;
console.log(maximaHoy);
console.log(maximaManana);
 */
/* 5 */
function sumEveryOther(...num) {
    let suma = 0;
    for (let i = 0; i < num.length; i++){
         suma+=num[i];
    }
    return suma;
}
console.log(sumEveryOther(6, 8, 2, 3, 1));

/* 6 */
function addOnlyNums (...listado){
    let suma = 0;
    for(let i=0; i<listado.length; i++){
        if(typeof listado[i] === "number"){
            suma+=listado[i]
        }
    }
    return suma;
}
console.log(addOnlyNums(1, "perro", 2, 4))

/* 7 */
function countTheArgs(...listado){
    return listado.length
}
console.log(countTheArgs("gato", "perro", "pollo", "oso"));
/* 8 */
function combineTwoArrays (elemento1,elemento2){
    const combinados = [...elemento1, ...elemento2];
    return combinados;
}
console.log(combineTwoArrays([1, 2, 3], [4, 5, 6]));

/* 9 */
/* function onlyUniques(...elementos){
    let elementosUnicos = Set(elementos);
    let array = Array.from(elementosUnicos);
    return array;
}
onlyUniques("gato", "pollo", "cerdo", "cerdo");

*//* 10 */
function combineAllArrays(...arrays){
    let combinados = arrays.reduce((acumulador,actual)=>acumulador.concat(actual),[])
    return combinados
}
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]);

/* 11 */
function sumAndSquare(...numeritos) {
    let argumento = [];
    let suma=0;
    for (let i = 0; i < numeritos.length; i++) {
        elemCuadrado = Math.pow(numeritos[i], 2);
        argumento.push(elemCuadrado);
    }
    for(let j=0; j<argumento.length; j++){
        console.log(argumento)
        suma+=argumento[j];
    }
    return suma;
}
console.log(sumAndSquare(3, 6, 7, 8));