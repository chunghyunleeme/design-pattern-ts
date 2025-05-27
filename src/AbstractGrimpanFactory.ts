import { Grimpan } from "./AbstractGrimpan";

export abstract class GrimpanFactory {
  static createGrimpan() {
      return Grimpan.getInstance() as unknown as Grimpan;
  };
}