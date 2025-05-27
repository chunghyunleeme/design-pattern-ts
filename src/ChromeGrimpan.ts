import {Grimpan} from "./AbstractGrimpan";

export class ChromeGrimpan extends Grimpan{
    private static instance: Grimpan;
    protected constructor(canvas: HTMLElement | null) {
        super(canvas);
    }

    override initialize(): void {
        throw new Error("Method not implemented.");
    }

    static override getInstance(){
        if(!this.instance) {
            this.instance = new ChromeGrimpan(document.querySelector('#canvas'));
        }
        return this.instance;
    }
}