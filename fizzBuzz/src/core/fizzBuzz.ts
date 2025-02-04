export function fizzBuzz(number: number, divisor: number = 5) {
    function isDivisibleBy(divisor: number) {
        return number % divisor === 0;
    }

    if(isDivisibleBy(15)){
        return 'fizzBuzz'
    }

    if(isDivisibleBy(3)){
        return 'fizz'
    }

    if(isDivisibleBy(5)){
        return 'buzz'
    }

    return number.toString();
}