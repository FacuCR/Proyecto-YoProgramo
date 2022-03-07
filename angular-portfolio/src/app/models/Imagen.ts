class Imagen {
    protected _ruta: string = '';
    protected _archivo: string = '';

    public constructor() {}

    public get ruta(): string {
        return this._ruta;
    }
    public set ruta(value: string) {
        this._ruta = value;
    }

    public get archivo(): string {
        return this._archivo;
    }
    public set archivo(value: string) {
        this._archivo = value;
    }
}