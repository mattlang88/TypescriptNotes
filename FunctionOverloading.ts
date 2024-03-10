//The following three examples showcase function overloading

//Overloading based on different types
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
}
console.log(add(5, 10)); // 15
console.log(add('Hello, ', 'world!')); // Hello, world!

//Overloading based on different amount of parameters
function greet(name: string): string;
function greet(name: string, greeting: string): string;
function greet(name: string, greeting?: string): string {
  return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!
console.log(greet("Alice", "Good morning")); // Good morning, Alice!
