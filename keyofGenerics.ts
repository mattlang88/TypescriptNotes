//The following file showcases how you can use the "keyof" keyword with a generic function

class User {
    name: string;
    age: number;
    id: string;

    constructor(name: string, age: number, id: string) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}

class Admin extends User {
    rootAccess: boolean;

    constructor(name: string, age: number, id: string, rootAccess: boolean) {
        super(name, age, id);
        this.rootAccess = rootAccess;
    }
}

function setProperty<T extends User | Admin, K extends keyof T>(
    obj: T,
    property: keyof T,
    value: T[K],
) {
    obj[property] = value;
}

let matze = new User('Matthisa', 36, '123');
//Nice here is that your typescript can give you a good guidance now
// which properties can be set for the given object
setProperty(matze, 'name', 'Matthias');
//setProperty(matze, 'rootAccess', true); Leads to error
console.log(matze);

let freddy = new Admin('Freddy', 36, '456', false);
setProperty(freddy, 'rootAccess', true);
console.log(freddy);
