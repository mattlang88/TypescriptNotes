//The following file shows the usage of getters and setter in typescript
class Point2D {
  //protected and private properties are prefixed with an "_"
    protected _xPos: number;
    protected _yPos: number;

    //getters and setters have specific get and set keywords which describe the returned property without the "_" prefix
    get xPos() {
      //Inside a class / inheritance, the properties are accessed with the "_" prefix, making a clear differece between internal access and external usage.
        return this._xPos;
    }

    set xPos(xPosInput: number) {
        this._xPos = xPosInput;
    }

    get yPos() {
        return this._yPos;
    }

    set yPos(yPosInput: number) {
        this._yPos = yPosInput;
    }

    constructor(xInput: number, yInput: number) {
        this._xPos = xInput;
        this._yPos = yInput;
    }
}

class Point3D extends Point2D {
    protected _zPos: number;
    get zPos() {
        return this._zPos;
    }
    set zPos(zPosInput: number) {
        this._zPos = zPosInput;
    }
    constructor(xInput: number, yInput: number, zInput: number) {
        super(xInput, yInput);
        this._zPos = zInput;
    }
}

const pointA = new Point2D(0, 0);
//Accessing a property through a getter or setter looks the same as accessing a public property
console.log(
    'xPos accessed by getter, expected value 0: '.concat(String(pointA.xPos)),
);
pointA.xPos = 2;
console.log(
    'xPos after altered by setter, expected value 2: '.concat(
        String(pointA.xPos),
    ),
);

const pointB = new Point3D(1, 1, 1);
console.log(
    'zPos accessed by getter, expected value 1: '.concat(String(pointB.zPos)),
);
pointB.zPos = 0;
console.log(
    'zPos after altered by setter, expected value 0: '.concat(
        String(pointB.zPos),
    ),
);
