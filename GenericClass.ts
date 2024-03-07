//The following file shall demonstrate how to use generic classes
//Generic classes are class which can be used with generic data types (e.g. in the constructor)

//First we define some test data
interface Car {
    liscensePlate: string;
    numberOfWheels: number;
}

interface Ship {
    liscensePlate: string;
    isSubmarine: boolean;
}

interface Plane {
    liscensePlate: string;
    supersonicCapable: boolean;
}

const shipArray: Ship[] = [
    { liscensePlate: 'H-123', isSubmarine: false },
    { liscensePlate: 'Z-456', isSubmarine: true },
];
const planeArray: Plane[] = [
    { liscensePlate: 'J-789', supersonicCapable: true },
    { liscensePlate: 'K-765', supersonicCapable: false },
];
const carArray: Car[] = [
    { liscensePlate: 'Q-123', numberOfWheels: 4 },
    { liscensePlate: 'L-987', numberOfWheels: 6 },
];

interface Vehicle {
    liscensePlate: string;
}

class VehicleStorage<Type extends Vehicle> {
    vehicle: Type[];
    constructor(vehicleInput: Type[]) {
        this.vehicle = vehicleInput;
    }

    print() {
        console.log(this.vehicle);
    }
}

const planeClass = new VehicleStorage(planeArray);
planeClass.print();
