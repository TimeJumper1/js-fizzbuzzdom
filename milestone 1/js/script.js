// ciclo che conta da 1 a 100

for (let i = 1; i <= 100; i++) {
    
    let fizzBuzzFizzbuzz;
    if (i % 3 === 0 && i % 5 === 0 ){
        fizzBuzzFizzbuzz = 'fizzbuzz'
        i == 'fizzbuzz'
        console.log(fizzBuzzFizzbuzz)

    }else if (i % 5 === 0){
        fizzBuzzFizzbuzz = 'buzz'
        i == 'buzz'
        console.log(fizzBuzzFizzbuzz)
        
    

    }else if (i % 3 === 0){
        fizzBuzzFizzbuzz = 'fizz'
        i == 'fizz'
        console.log(fizzBuzzFizzbuzz)

    }else{
        console.log(i)
    }


}