import {fizzBuzz} from "../core/fizzBuzz";

describe('FizzBuzz', ()=>{
    it('returns number one as a string for number one', ()=> {
        expect(fizzBuzz(1)).toBe('1')
    })

    it('returns number two as a string for number two', ()=> {
        expect(fizzBuzz(2)).toBe('2')
    })


    it('returns fizz for number three', ()=> {
        expect(fizzBuzz(3)).toBe('fizz')
    })

    it('returns buzz for number five', ()=> {
        expect(fizzBuzz(5)).toBe('buzz')
    })

    it('returns fizzBuzz for number fifteen', ()=> {
        expect(fizzBuzz(15)).toBe('fizzBuzz')
    })


    it('returns fizz for any number divisible by three', ()=> {
        expect(fizzBuzz(6)).toBe('fizz')
    })

    it('returns buzz for any number divisible by five', ()=> {
        expect(fizzBuzz(10)).toBe('buzz')
    })

    it('returns fizzBuzz for any number divisible by fifteen', ()=> {
        expect(fizzBuzz(15)).toBe('fizzBuzz')
    })

    it('returns number as a string for any number that is not divisible by three or five', ()=> {
        expect(fizzBuzz(2)).toBe('2')
    })
})