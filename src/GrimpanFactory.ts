import { Grimpan } from "./AbstractGrimpan";
import {ChromeGrimpan} from "./ChromeGrimpan";
import {IEGrimpan} from "./IEGrimpan";
import {ChromeGrimpanMenu, GrimpanMenu, IEGrimpanMenu} from "./GrimpanMenu";

export abstract class GrimpanFactory {
  static createGrimpan() {
      return Grimpan.getInstance() as unknown as Grimpan;
  };

  static createGrimpanMenu(grimpan: Grimpan) {
      return GrimpanMenu.getInstance(grimpan) as unknown as GrimpanMenu;
  }
}

export class ChromeGrimpanFactory extends GrimpanFactory {
    static override createGrimpan(): Grimpan {
        return ChromeGrimpan.getInstance();
    }

    static override createGrimpanMenu(grimpan: ChromeGrimpan): ChromeGrimpanMenu {
        return ChromeGrimpanMenu.getInstance(grimpan);
    }
}

export class IEGrimpanFactory extends GrimpanFactory {
    static override createGrimpan(): Grimpan {
        return IEGrimpan.getInstance();
    }

    static override createGrimpanMenu(grimpan: IEGrimpan): IEGrimpanMenu {
        return IEGrimpanMenu.getInstance(grimpan);
    }
}