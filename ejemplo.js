
let num1=1
let num2=2
let cadena="hola"

console.log(num1)
console.log(num2)
console.log(cadena)
console.log("hola")
const txt1=new String("hola a todos")
console.log (txt1)

console.log('1.2.3.4.5'.split('.'))
console.log(txt1.split(' '))

console.log (txt1.length)
console.log(txt1.charAt(2))

//Arreglos

var animales=['tigre','ballena','lobo','aguila']
console.log(animales.length)
console.log(animales.pop())
console.log(animales)
console.log(animales.push('perro'))
console.log(animales)
let numeros=[11,10,5,4,12]
console.log(numeros.reverse())

var juntar=numeros.join();
console.log (juntar)

let anio=[1995,1999,2024,2020]
function encontrar(item){
    return item>=2000
}
console.log(anio.some(encontrar))


var vestimenta=['camisa','gorra','pantalon','cartera']
function mifuncion(item1,index){
    console.log(index+":"+item1)
}
vestimenta.forEach(mifuncion)
let array=Array.from("1A2B3C4D")
console.log(array)

//every
let num=[32,33,15,40]
mifuncion1()
function validarArray(item){
    return item >=19
}
function mifuncion1(item){
    console.log(num.every(validarArray))
}
//De un determinado arreglo con nombre y edad vamos a buscar aquellas personas que tenga mas de 5 años

let personas=[
    {nombre: "Zamba", edad:97},
    {nombre: "El niño que lo sabe todo", edad:200},
    {nombre: "Quico", edad:0},
    {nombre: "Popis", edad:2},
    {nombre: "Kick butowski", edad:4}
]
let busqueda=personas.filter(personas=>personas.edad>5)
console.log(busqueda)
//hacer una busqueda de 10 trabajadores donde sean developers
let trabajadores=[
    {nombre: "Zamba", trabajo:"narcotraficante"},
    {nombre: "El niño que lo sabe todo", trabajo:"genocida"},
    {nombre: "El niño cauteloso", trabajo:"developer"},
    {nombre: "Popis", trabajo:"developer"},
    {nombre: "Kick butowski", trabajo:"chaman"}
]
let Buscar=trabajadores.filter(trabajador=>trabajadores.trabajo="developer")
console.log(Buscar)