export default class Grimpan {
    private static instance: Grimpan;
    private constructor(canvas: HTMLElement | null) {
        if(!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('canvas is required');
        }
    }

    static getInstance(){
        if(!this.instance) {
            this.instance = new Grimpan(document.querySelector('#canvas'));
        }
        return this.instance;
    }
}