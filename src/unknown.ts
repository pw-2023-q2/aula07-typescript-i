/**
 * Unknown requires preliminary type checking before
 * using the unknown-typed variable.
 * 
 * @param value the unknown value
 */
function processValue(value: unknown): void {
    if (typeof value == "number") {
        const b = value + 1
        console.log(b)
    } else if (typeof value == "string") {
        console.log(value.toUpperCase())
    } else if (Array.isArray(value)) {
        console.log(value.length)
    } else {
        console.log('Unsupported type');
    }    
}

processValue(10)
processValue("hello")
processValue([1, 2, 4])
processValue(false)