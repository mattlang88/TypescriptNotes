// The following two classes show different levels of visibility for properties
// Levels are public, protected and private

class Point2D {
    //Can be accessed from all classes.
    public xpos: number;
    //Can only be accessed by child classes and this class, not by other classes.
    protected ypos: number;
    //If we want to make sure that if a value is altered by a child class
    // only in certain way, we can make the property private and give access
    // through a setter.
    private _name: string;

    set name(nameInput: string) {
        //here could be some santization before setting the name property,
        // e.g. casting all letters to lowercase
        this._name = nameInput;
    }

    get name() {
        return this._name;
    }

    constructor(xPosInput: number, yPosInput: number, nameInput: string) {
        this._name = nameInput;
        this.xpos = xPosInput;
        this.ypos = yPosInput;
    }
}

class Point3D extends Point2D {
    zPos: number;
    constructor(
        xPosInput: number,
        yPosInput: number,
        zPosInput: number,
        name: string,
    ) {
        super(xPosInput, yPosInput, name);
        this.zPos = zPosInput;
        this.name = 'Test name, set by the setter.';
    }
}

const dummyPoint = new Point3D(0, 0, 0, 'thisNameWillBeOverwritten');
console.log(dummyPoint);
