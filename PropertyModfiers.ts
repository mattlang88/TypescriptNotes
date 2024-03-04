interface Point2D {
    xPos: number;
    yPos: number;
    readonly name?: string;
}

const point1: Point2D = { xPos: 0, yPos: 0, name: 'CenterPoint' };
point1.name = 'test';

const point2: Point2D = { xPos: 1, yPos: 1 };
point2.name = 'assigendVariableAfterInit';
