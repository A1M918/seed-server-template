import {Interface} from "./Interface";

export class Class implements Interface {
    public id: number;
    constructor() {
        this.id = 5 + 5;
    }
    methodMultiply(no: number): number {
        return no * this.id;
    }
}
