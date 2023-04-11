//Agregar elementos en el localStorage
localStorage.setItem("holi","Halo")

//Como guardar objetos o arrays en Local storage

const campers =[
    {
        name:"Juan",
        lastName:"Villamizar"
    },
    {
        name:"Mark",
        lastName:"Perez"
    }
]







//JSON.stringify JSON->javascript object notation

const campersString=JSON.stringify(campers)

localStorage.setItem("campers",campersString)

console.log(campersString);
console.log(typeof(campersString));



//2.
const persona={
    name:"Yo",
    edad:24
}
//2.1
localStorage.setItem("info",JSON.stringify(persona))
//2.2
let personaJson =JSON.parse(localStorage.getItem("info"))
console.log(personaJson);

//CRUD create read update delete

localStorage.removeItem('holi')

//Recuperando array y agregando un elemento
let agregando= JSON.parse(localStorage.getItem("campers"))
console.log(agregando);
agregando.push({
    name:"Pepito",
    lastName:"Perez"
})
console.log(agregando);

localStorage.setItem("campers",JSON.stringify(agregando))
//Limpiando todo el localStorage
localStorage.clear()