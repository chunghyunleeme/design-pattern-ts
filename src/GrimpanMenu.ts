import {Grimpan} from "./AbstractGrimpan";
import {ChromeGrimpan} from "./ChromeGrimpan";
import {IEGrimpan} from "./IEGrimpan";

export abstract class GrimpanMenu {
    grimpan: Grimpan;
    protected constructor(grimpan: Grimpan) {
        this.grimpan = grimpan;
    }

    abstract initialize(): void;

    static getInstance(grimpan: Grimpan) {}
}

export class IEGrimpanMenu extends GrimpanMenu {
    private static instance: IEGrimpanMenu;
    static override getInstance(grimpan: IEGrimpan): IEGrimpanMenu {
        if(!this.instance){
            this.instance = new IEGrimpanMenu(grimpan);
        }
        return this.instance;
    }

    override initialize(): void {
        // Initialize IE specific menu
    }
}

export class ChromeGrimpanMenu extends GrimpanMenu {
    private static instance: ChromeGrimpanMenu;
    static override getInstance(grimpan: ChromeGrimpan): IEGrimpanMenu {
        if(!this.instance){
            this.instance = new ChromeGrimpanMenu(grimpan);
        }
        return this.instance;
    }

    override initialize(): void {
        // Initialize IE specific menu
    }
}