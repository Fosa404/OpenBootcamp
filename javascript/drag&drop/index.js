const parrafos = document.querySelectorAll('.parrafo');
const sections = document.querySelectorAll('.section');
const recycleBin = document.getElementById('recycle');

parrafos.forEach(parrafo =>{
    parrafo.addEventListener('dragstart',event=>{
        event.dataTransfer.setData('id', parrafo.id);
        
    })
});

sections.forEach(section =>{
    section.addEventListener('dragover',event=>{
        event.preventDefault();
        
        
    })
});



sections.forEach(section =>{
    section.addEventListener('drop',event=>{
        const parrafoId = event.dataTransfer.getData('id');
        console.log(parrafoId);
        console.log(recycleBin)
        section.append(document.getElementById(parrafoId))
    })
});

recycleBin.addEventListener('dragover',event=>{
    event.preventDefault()
});

recycleBin.addEventListener('drop',event=>{
    const parrafoId = event.dataTransfer.getData('id');

    console.log(parrafoId);
    console.log(document.getElementById(parrafoId))

    sections.forEach(section=>{
        section.addEventListener(event, () =>{
            section.remove(document.getElementById(parrafoId))
        });
    })
});