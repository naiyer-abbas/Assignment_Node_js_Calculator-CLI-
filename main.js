        // Expression solver

const solveExpression = () => {
    let input = 'n';
    do{
        const expression = readlineSync.question('Enter the Expression : ');
        try{
            const res = eval(expression);
            console.log(res);
        }

        catch(ex)
        {
            console.log("Wrong Input");
        }

        input = readlineSync.question('Want to Evaluate another expression?, Type y to confirm, any other key to exit ');
    }while(input.toLowerCase() == 'y');
}


    // Area of Circle Calculator

const circleAreaCalculator = () => {
    let input = 'n';
    do{
        const radius = readlineSync.question('Enter the circle radius : ');
        parseFloat(radius);
        if(isNaN(radius))
        {
            console.log('Wrong input Entered!');
        }

        else
        {
            console.log(`The Area of the circle is : ${Math.PI * radius * radius} units`);
        }
        input = readlineSync.question('Want to use again?, Type y to confirm, any other key to exit ');
    }while(input.toLowerCase() == 'y');
}


// Area of Square Calculator

const squareAreaCalculator = () => {
    let input = 'n';
    do{
        const side = readlineSync.question('Enter the side of square : ');
        parseFloat(side);
        if(isNaN(side))
        {
            console.log('Wrong input Entered!');
        }

        else
        {
            console.log(`The Area of the Square is : ${side * side}`);
        }
        input = readlineSync.question('Want to use again?, Type y to confirm, any other key to exit ');
    }while(input.toLowerCase() == 'y');
}


    // Nth Prime Number Finder

const findNthPrime = () => {
    let prime_cache = [2, 3];
    let input = 'n';
    let ans;
    do{
        const n = readlineSync.question(`Enter the value of n :`);
        parseInt(n);
        if(isNaN(n))
        {
            console.log(`Wrong value of n entered!`);
            input = readlineSync.question('Want to use again?, Type y to confirm, any other key to exit ');   
        }
        if(n <= prime_cache.length)
        {
            ans = prime_cache[n - 1];
        }

        else
        {
            for(let i = prime_cache[prime_cache.length - 1] + 1; i <= 10000000; i++)
            {
                if(isPrime(i))
                {
                    prime_cache.push(i);
                }

                if(n == prime_cache.length)
                {
                    ans = i;
                    break;
                }
            }
        }
        console.log(`The ${n}th prime number is : ${ans}`);
        input = readlineSync.question('Want to use again?, Type y to confirm, any other key to exit ');
    }while(input.toLowerCase() == 'y')
}


    // To check whether a number is prime or not

const isPrime = (num) =>{
    let flag = 0;
    for(let i = 2; i * i <= num; i++)
    {
        if(num % i == 0)
            return false;
    }

    return true;
}





const readlineSync = require('readline-sync');
console.log(`1. Expression Solver
2. Area of Circle
3. Area of Square
4. Nth Prime Number

Choose your option:`)

let input = readlineSync.question();

switch(input)
{
    case '1':
        solveExpression();
        break;
    case '2':
        circleAreaCalculator();
        break;
    
    case '3':
        squareAreaCalculator();
        break;
    
    case '4':
        findNthPrime();

    default:
}


