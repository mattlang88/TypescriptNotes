class Customer {
    email: string;
    firstName: string;
    lastName: string;
    address: string;

    constructor(
        email: string,
        firstName: string,
        lastName: string,
        address: string,
    ) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }

    updateUser(updateRecords: Partial<Customer>) {
        Object.assign(this, updateRecords);
    }
}

let customer = new Customer(
    'Matze@maildu.de',
    'Matthias',
    'Kraus',
    'Musterstraße 1',
);
console.log;
customer.updateUser({ lastName: 'Peng' });
console.log(customer);
