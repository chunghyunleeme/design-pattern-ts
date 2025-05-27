import {ChromeGrimpanFactory, GrimpanFactory} from "./GrimpanFactory";

function main(factory: typeof GrimpanFactory){
    const grimpan = factory.createGrimpan();
    const grimpanMenu = factory.createGrimpanMenu(grimpan);
    grimpan.initialize();
    grimpanMenu.initialize();
}

main(ChromeGrimpanFactory);