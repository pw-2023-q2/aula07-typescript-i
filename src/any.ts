/**
 * The any type disables all type checking
 * i.e. falls back to JavaScript typing
 */

let a: any = 1

a = 'hello'
a = true
a = []

export {}