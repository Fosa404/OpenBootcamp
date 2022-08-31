const btn = document.getElementById('btn');
console.log(btn)

btn.addEventListener('click', () => {
    alert('click en el boton')
})

$(() => {
    $('#btn').click(() => {
        console.log("Hola, estoy utilizando jQuery")
    }) 
})