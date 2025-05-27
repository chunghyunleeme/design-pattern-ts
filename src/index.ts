import {GrimpanFactory} from "./AbstractGrimpanFactory";
import { Grimpan } from './AbstractGrimpan';
import ChromeGrimpan from "./ChromeGrimpan";
import {IEGrimpan} from "./IEGrimpan";

class ChromeGrimpanFactory extends GrimpanFactory {
    static override createGrimpan(): Grimpan {
        return ChromeGrimpan.getInstance();
    }
}

class IEGrimpanFactory extends GrimpanFactory {
    static override createGrimpan(): Grimpan {
        return IEGrimpan.getInstance();
    }
}

function main(factory: typeof GrimpanFactory){
    const grimpan = factory.createGrimpan();
    grimpan.initialize();
    grimpan.initializeMenu();
}