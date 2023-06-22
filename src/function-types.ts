function squareOf(n: number) {
    return n * n;
}

function squareOf2(n: number): number {
    return n * n;
}

const add: (x: number, y: number) => number 
    = function (a: number, b: number): number {
    return a + b
}

const add2 = (a: number, b: number): number => a + b

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

console.log(add4(10, 20))
console.log(add4(10, 20, 30, 40, 50))

