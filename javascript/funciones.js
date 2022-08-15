function verdadera (){
    return true
};
console.log(verdadera());


const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve()}
    else{
        reject()
    }
},);

promise
    .then(setTimeout(()=>console.log("Hola soy una promesa"),5000));


    function* generator (){
        let index = 0
        while(true){
            if(index % 2 === 0 && index <= 10){
            yield index}
            index +=2;
        };
    };

    const gen = generator()
    console.log(gen.next())
    console.log(gen.next())
    console.log(gen.next())
    console.log(gen.next())
    console.log(gen.next())
    console.log(gen.next())