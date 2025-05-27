import { Grimpan } from "./AbstractGrimpan";

export class IEGrimpan extends Grimpan {
    private static instance: IEGrimpan;
    protected constructor(canvas: HTMLElement | null) {
        super(canvas);
    }
    override initialize(): void {
        throw new Error("Method not implemented.");
    }

    static override getInstance(){
        if(!this.instance) {
            this.instance = new IEGrimpan(document.querySelector('#canvas'));
        }
        return this.instance;
    }

}