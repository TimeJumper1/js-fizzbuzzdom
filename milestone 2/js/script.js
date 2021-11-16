// ciclo che conta da 1 a 100
const containerBox = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {
    
    
    

    let fizzBuzzFizzbuzz;
    if (i % 3 === 0 && i % 5 === 0 ){
        fizzBuzzFizzbuzz = 'fizzbuzz'
        i == 'fizzbuzz'
        console.log(fizzBuzzFizzbuzz)

        const myBox = `
        <div class="box">${fizzBuzzFizzbuzz}</div>
    `;
    containerBox.innerHTML += myBox


    }else if (i % 5 === 0){
        fizzBuzzFizzbuzz = 'buzz'
        i == 'buzz'
        console.log(fizzBuzzFizzbuzz)
        
        const myBox = `
        <div class="box">${fizzBuzzFizzbuzz}</div>
    `;
    containerBox.innerHTML += myBox

    }else if (i % 3 === 0){
        fizzBuzzFizzbuzz = 'fizz'
        i == 'fizz'
        console.log(fizzBuzzFizzbuzz)

        const myBox = `
        <div class="box">${fizzBuzzFizzbuzz}</div>
    `;
    containerBox.innerHTML += myBox

    }else{
        console.log(i)

        const myBox = `
        <div class="box">${i}</div>
    `;
    containerBox.innerHTML += myBox


    }
    

}