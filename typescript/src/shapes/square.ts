import { Shape } from './shape';

class Square implements Shape {
    private readonly sideLen: number;

    constructor(sideLen: number) {
        this.sideLen = sideLen;
    }

    public computeArea(): number {
        return this.sideLen * this.sideLen;
    }
}

export { Square }
