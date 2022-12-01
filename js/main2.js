function grasaCorporal(peso11, altura11)
{
    var indiceMasa=peso11/(altura11*altura11)
    indiceMasa=parseFloat(indiceMasa)
    
    
    if(indiceMasa<16.00){

    }
     else if(indiceMasa<16.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes un bajo peso y diagnostico de desnutricion severa" )

         document.write( "<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
         document.write( "<p>"+" tienes un bajo peso y diagnostico de desnutricion severa"+"</p>" )
        
    }
    else if(indiceMasa<17.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes un bajo peso y diagnostico de desnutricion moderada" )

         document.write( "<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
         document.write("<p>"+" tienes un bajo peso y diagnostico de desnutricion moderada"+"</p>" )
        
    }
    else if(indiceMasa<18.50){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes un bajo peso y diagnostico de desnutricion leve" )

         document.write("<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
         document.write("<p>"+" tienes un bajo peso y diagnostico de desnutricion leve" +"</p>")
        
    }
    else if(indiceMasa<25.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes un bajo normal" )

         document.write("<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
        document.write("<p>"+" tienes un pesp normal" +"</p>")
        
    }
    else if(indiceMasa<29.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes un sobrepeso diagnostrico de pre-obesidad" )

         document.write("<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
         document.write("<p>"+" tienes un peso normal"+"</p>" )
        
    }
    else if(indiceMasa<35.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes obesidad grado 1 diagnostrico leve moderado" )

         document.write("<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
         document.write("<p>"+" tienes obesidad grado 1 diagnostrico leve moderado" +"</p>")
        
    }

    else if(indiceMasa<40.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes obesidad grado 2 diagnostrico obesidad severa" )

        document.write("<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
        document.write("<p>"+" tienes obesidad grado 2 diagnostrico obesidad severa" +"</p>")
        
    }

    else{

        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes obesidad grado 3 diagnostrico obesidad morbida" )

        document.write("<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
        document.write("<p>"+" tienes obesidad grado 3 diagnostrico obesidad morbida" +"</p>")

    }

}

console.log(" entrando pagina 2")

const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const calcular = document.querySelector("#boton2");

calcular.addEventListener("click", (a)=>{
  a.preventDefault()

  const pesoIngresado=peso.value;
   const alturaIngresada=altura.value;

   console.log(pesoIngresado+ " el peso ingresado  " )
   console.log(alturaIngresada+ " la altura ingresada  " )


   grasaCorporal(pesoIngresado, alturaIngresada)

    





 })

// calcular.addEventListener("click", guardarMasa);

// function guardarMasa() {
    
// }