function goFeatures(){

document

.getElementById(

"funciones"

)

.scrollIntoView({

behavior:

"smooth"

})

}



function analizarCaballo(){

document

.getElementById(

"resultado"

)

.innerHTML=

`

<h2>

🧠 IA

</h2>

Salud: 95%

<br><br>

Velocidad: Excelente

`

}



function entrenarCaballo(){

document

.getElementById(

"resultado"

)

.innerHTML=

`

<h2>

🏇 Entrenamiento

</h2>

Calentamiento

<br>

Carrera

<br>

Descanso

`

}



function verRendimiento(){

document

.getElementById(

"resultado"

)

.innerHTML=

`

<h2>

📈 Rendimiento

</h2>

Progreso:

89%

`

}



window.addEventListener(

"scroll",

()=>{

const top=

document.querySelector(

".top"

)

top.style.display=

window.scrollY>500

?

"block"

:

"none"

})



document

.querySelector(

".top"

)

.onclick=

()=>{

window.scrollTo({

top:0,

behavior:"smooth"

})

}



document

.querySelector(

"form"

)

.addEventListener(

"submit",

e=>{

e.preventDefault()

alert(

"Mensaje enviado"

)

})

function toggleMenu(){

document
.getElementById("menu")
.classList
.toggle("active");

}
