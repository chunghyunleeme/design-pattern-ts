export abstract class Grimpan {
    protected constructor(canvas: HTMLElement | null) {
        if(!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('canvas is required');
        }
    }

    abstract initialize(): void;
    abstract initializeMenu(): {}
    static getInstance(){}
}