//The following functions shall demonstrate how to use generic functions
//Generic functions are used to reduce the need for repeated functionality

//First we define some test data
interface car {
    liscensePlate: string;
    numberOfWheels: number;
}

interface ship {
    liscensePlate: string;
    isSubmarine: boolean;
}

interface plane {
    liscensePlate: string;
    supersonicCapable: boolean;
}

const shipArray: ship[] = [
    { liscensePlate: 'H-123', isSubmarine: false },
    { liscensePlate: 'Z-456', isSubmarine: true },
];
const planeArray: plane[] = [
    { liscensePlate: 'J-789', supersonicCapable: true },
    { liscensePlate: 'K-765', supersonicCapable: false },
];
const carArray: car[] = [
    { liscensePlate: 'Q-123', numberOfWheels: 4 },
    { liscensePlate: 'L-987', numberOfWheels: 6 },
];

//Now we want to get the first element of each of those arrays

function getFirstElementOfPlaneArray(arr: plane[]) {
    return arr[0];
}

function getFirstElementOfCarArray(arr: car[]) {
    return arr[0];
}

function getFirstElementOfShipArray(arr: ship[]) {
    return arr[0];
}

console.log(getFirstElementOfPlaneArray(planeArray));
console.log(getFirstElementOfShipArray(shipArray));
console.log(getFirstElementOfCarArray(carArray));

//obviously the functionality of the three functions above is almost identical
//one way to centralize their functionality would be to use the any keywork:

function getFirstElementOfAnyArray(arr: any) {
    return arr[0];
}

console.log(getFirstElementOfAnyArray(planeArray));
console.log(getFirstElementOfAnyArray(shipArray));
console.log(getFirstElementOfAnyArray(carArray));

//However, the any keyword is kind of the last resort when using typescript
//for two reasons:
//1. since we basically annihilate the good idea of focusing more on types in typescript
//2. We can't constrain "any", so the function becomes a lot more vulnerable two
// uninted use.
// This is where abstract functions come in:

function getFirstElementOfAbstractArray<T>(arr: T[]) {
    return arr[0];
}

console.log(getFirstElementOfAbstractArray(planeArray));
console.log(getFirstElementOfAbstractArray(shipArray));
console.log(getFirstElementOfAbstractArray(carArray));

//Yet getFirstElementOfAbstractArray has the same functionality as getFirstElementOfAnyArray
//This means someone could use our function  with data types we did not intend, e.g:

const boolArray: boolean[] = [true, false, true];
console.log(getFirstElementOfAbstractArray(boolArray));

//What we can do now is to restrict the use of our function with constraints
//We create an interface which has the common property of all used objects
interface Vehicle {
    liscensePlate: string;
}

//And tell the abstract function that its abstract data type extends this interface
// by that constraining the abstract data type to objects which have a liscensePlate property.
function returnFirstElementOfVehicleArray<T extends Vehicle>(arr: T[]) {
    return arr[0];
}

console.log(returnFirstElementOfVehicleArray(shipArray));
console.log(returnFirstElementOfVehicleArray(planeArray));
console.log(returnFirstElementOfVehicleArray(carArray));

//We see, we restricted the abstract function to only work on arrays of objects
//which have the "liscenePlate" property. The bool array from before is rejected by 
//typescript:

returnFirstElementOfVehicleArray(boolArray);
