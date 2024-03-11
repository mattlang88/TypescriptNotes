//The following file shall demonstrate the use of keyof keyword in TypeScript

//The keyof keyword is used to get the keys of an object
//The keys are returned as a union of string literals

type Person = {
    name: string;
    age: number;
};

function printData(data: Person, key: keyof Person) {
    console.log(data[key]);
}

let person: Person = { name: 'John', age: 30 };
printData(person, 'name'); //John
