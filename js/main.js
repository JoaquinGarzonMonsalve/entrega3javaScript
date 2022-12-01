// declaracion de variables globales

let accesoUser= false
let accesoPass= false
let usuarioActivo="nn"
let continuar="  "
let busquedas= true



// funciones globales

function saludar( usuarioActivos){
    console.log(" bienvenido " + usuarioActivos)
    document.write("<p>"+"hola "+ usuarioActivos +"</p>" );
    return ' Bienvenido ' +usuarioActivos
}

function despedida( usuarioActivos){

    document.write("<p>"+" adios  " + usuarioActivos +"</p>");
    console.log(" Adios " + usuarioActivos)
    return ' Adios ' + usuarioActivos
}




// programas de entrenamientos Gimnasio Fajard

const programas=[
    {
        programa: "perdida",
        dudacion: " 3 semanas ",
        sede : " principal ",
        costo: 50,
        detalles:" este programa consta de alta exigencia cardio vascular y una sana alimentacion "

    },

    
    {
        programa: "tonificacion",
        dudacion: " 5 semanas ",
        sede : "principal y sede norte",
        costo: 80,
        detalles:" en este programa trabajaremos con un peso nivel medio y bastantes repeticiones "

    },

    {
        programa: "crecimiento",
        dudacion: " 10 semanas ",
        sede : "principal y sede norte",
        costo: 100,
        detalles:" en este programa trabajaremos con un peso nivel alto y pocas repeticiones "

    }


]


function escogerPrograma( posicion, detalle){
    

    return " el programa consta de " + programas[posicion]


}


// lista de usuarios #  3333  ########3 3##3#####$`

let usuarioAntes=["maria", "jose", "jesus", "sol", "luna"]

let passAntes=[ "111", "222",  "333",  "444",  "555"  ]

// maria  contraseña  111         
// jose  contraseña   222     
// jesus  contraseña  333      
// adan  contraseña   444     
// eva   contraseña   555   

const usuarioJSON = JSON.stringify(usuarioAntes);
console.log(usuarioAntes)
localStorage.setItem("usuario", usuarioJSON);
console.log(usuarioJSON)


const usuarioEnLocalStorage = localStorage.getItem("usuario");
console.log(usuarioEnLocalStorage)
const usuarioDespues = JSON.parse(usuarioEnLocalStorage);
console.log(usuarioDespues)

const  passJSON = JSON.stringify( passAntes);
console.log( passAntes)
localStorage.setItem(" pass ",  passJSON);
console.log(usuarioJSON)


const  passEnLocalStorage = localStorage.getItem(" pass ");
console.log(usuarioEnLocalStorage)
const  passDespues = JSON.parse( passEnLocalStorage);
console.log(usuarioDespues);

    


const primera = document.querySelector("#primera");
const ingreso = document.querySelector("#boton");
const usuarioIngresada = document.querySelector("#usuario");
const contrasenaIngresada = document.querySelector("#pass");
const intento = document.querySelector("#intento");
const sub = document.querySelector("#sub");
const containerFinal = document.querySelector("#containerFinal");


// const boton22 = document.querySelector("#boton2");

// var peso1=parseFloat(peso).value;
// var altura1=parseFloat(altura).value;

// boton22.addEventListener("click", leer);

// function leer(){
//     const peso2=peso1;
//     const altura2=altura1;

// }



// boton22.addEventListener("click",(a)=>{
//      a.preventDefault() ;
//     grasaCorporal(peso1, altura1);
// })


ingreso.addEventListener("click", (e)=>{
    e.preventDefault()

   const usuario1=usuarioIngresada.value;
   const pass1=contrasenaIngresada.value;
    console.log(usuario1);
    console.log(pass1);
    
    for( i=0; i<usuarioDespues.length; i++)
    {
    
        console.log(i)
        console.log(usuario1)
        console.log(usuarioDespues[i])
        console.log(usuarioDespues.length)
        
        
        accesoUser=( usuario1==usuarioDespues[i])
    
        if(accesoUser== true)
        {
            
            usuarioActivo=usuario
            alert(" usuario correcto")
            console.log(" acceso correcto")
    
    
            // for de 3 intentos de contraña
    
            for(j=0; j<3;j++)
            {
    
            
            
                if( pass1==passDespues[i])
                    {


                    alert(" acceso correcto ")
                    i=5 // fin ciclo usuario
                    j=5  // fin ciclo contrasa

                     usuarioIngresada.classList.toggle("esconder");
                     contrasenaIngresada.classList.toggle("esconder");

                    containerFinal.classList.toggle("esconder");
                
                     ingreso.classList.toggle("esconder");
                    primera.classList.toggle("esconder");
                     sub.classList.toggle("esconder");

                    intento.classList.remove("invisible");
                

                    intento.classList.toggle("visible")
                    intento.classList.toggle("invisible")
                
    
                
                    }
                    else
                    {
                        alert("contraseña incorrecta ")
                    }


    
            }
            
    
        }
        
        
    }

    
    

})





