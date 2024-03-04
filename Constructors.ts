// The following class shows how a constuctor is used in typescript (including inheritance)

class Point2D {
    xPos: number;
    yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }
}

class Point3D extends Point2D {
    zPos: number;
    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput); //must be called before the first reference to "this"
        this.zPos = zPosInput;
    }
}

const point1 = new Point2D(0, 0);
const point2 = new Point3D(0, 0, 1);

console.log(point1);
console.log(point2);
