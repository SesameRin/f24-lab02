import { Shape } from './shape';

class Circle implements Shape {
    private readonly radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public computeArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

export { Circle }



