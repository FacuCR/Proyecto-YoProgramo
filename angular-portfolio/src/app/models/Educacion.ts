class Educacion {
    protected _id: number = -1;
    protected _institucion: string = '';
    protected _descripcion: string = '';
    protected _fechaI: Date = new Date();
    protected _fechaF: Date = new Date();

    public constructor() {}

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get institucion(): string {
        return this._institucion;
    }
    public set institucion(value: string) {
        this._institucion = value;
    }

    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }

    public get fechaI(): Date {
        return this._fechaI;
    }
    public set fechaI(value: Date) {
        this._fechaI = value;
    }

    public get fechaF(): Date {
        return this._fechaF;
    }
    public set fechaF(value: Date) {
        this._fechaF = value;
    }
}