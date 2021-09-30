import {Interface} from "./Interface";

export class Class implements Interface {
    public id: number;
    constructor() {
        this.id = 10;
    }
    methodMultiply(no: number): number {
        return no * this.id;
    }
}
