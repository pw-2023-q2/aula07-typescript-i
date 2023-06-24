/**
 * A basic function definition with return type inference.
 * 
 * @param n  the parameter
 * @returns the return type
 */
function squareOf(n: number) {
    return n * n;
}

/**
 * A function definition with explicit return type.
 * 
 * @param n the number parameter
 * @returns a number
 */
function squareOf2(n: number): number {
    return n * n;
}

/**
 * A variable of a function-type, i.e., it 
 * can only store functions that match the type 
 * specification. 
 * 
 * @param a the first number parameter
 * @param b the second number parameter
 * @returns a number
 */
const add: (x: number, y: number) => number 
    = function (a: number, b: number): number {
    return a + b
}

/**
 * A variable that stores a lambda expression. At
 * the absence of an explicit declaration, the 
 * function-type is inferred.
 * @param a the first number parameter
 * @param b the second number parameter
 * @returns a number
 */
const add2 = (a: number, b: number): number => a + b

/**
 * A function with variable-size arguments. Here we have two
 * required parameters, followed by a variable quantity of optional
 * parameters.
 * 
 * @param x the first required parameter
 * @param y the second required parameter
 * @param otherNumbers the array of optional parameters
 * @returns a number
 */
const add4 = function (x: number, y: number, ...otherNumbers: number[]): number {
    function sum(array: number[]) {
        let s = 0;

        for (const v of array) {
            s += v
        }

        return s
    }

    return x + y + sum(otherNumbers)
}

/**
 * The first example provides the two required parameters.
 * The second example provides additionally threee optional parameters.
 */
console.log(add4(10, 20))
console.log(add4(10, 20, 30, 40, 50))

/**
 * A function with two required parameters and two optional 
 * parameters with default values.
 * 
 * @param x the first required parameter
 * @param y the second required parameter
 * @param z the first optional parameter
 * @param w the second optional parameter
 * @returns the sum of the parameters
 */
const add5 = function (x: number, y: number, z: number = 0, w = 0) {
    return x + y + z + w;
}

/**
 * Here we check the behavior of optional parameters.
 */
console.log(add5(10, 20))
console.log(add5(10, 20, 30))
console.log(add5(10, 20, 30, 40))

/**
 * Another way of providing optional parameters is by making them nullable.
 * But the strategy requires previous value-checking (undefined is falsy).
 * Here we used the nullish coalescing operator (??) to check for undefined.
 * 
 * @param x the first required parameter
 * @param y the second required parameter
 * @param z the first optional parameter
 * @param w the second required parameter
 * @returns the sum of the parameters
 */
const add6 = function (x: number, y: number, z?: number, w?: number) {
    return x + y + (z ?? 0) + (w ?? 0)
}
    
console.log(add6(10, 20))
console.log(add6(10, 20, 30))
console.log(add6(10, 20, 30, 40))

export {}
