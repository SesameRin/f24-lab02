import { Shape } from './shape';

class Rectangle implements Shape {
    private readonly width: number;
    private readonly height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public computeArea(): number {
        return this.width * this.height;
    }
}

export { Rectangle }

