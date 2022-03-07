class Localizacion {
    protected _pais: string = '';
    protected _ciudad: string = '';

    public constructor() {}

    public get pais(): string {
        return this._pais;
    }
    public set pais(value: string) {
        this._pais = value;
    }

    public get ciudad(): string {
        return this._ciudad;
    }
    public set ciudad(value: string) {
        this._ciudad = value;
    }
}