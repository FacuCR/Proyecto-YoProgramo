export class Fotos {
    protected _ruta: string = '';
    protected _bg: string = '';
    protected _perfil: string = '';

    public constructor() {}

    public get ruta(): string {
        return this._ruta;
    }
    public set ruta(value: string) {
        this._ruta = value;
    }

    public get bg(): string {
        return this._bg;
    }
    public set bg(value: string) {
        this._bg = value;
    }

    public get perfil(): string {
        return this._perfil;
    }
    public set perfil(value: string) {
        this._perfil = value;
    }
}