class Tecnologia {
    protected _id: number = -1;
    protected _nombre: string = '';
    protected _color: string = '';
    protected _fechaI: Date = new Date();
    protected _fechaF: Date = new Date();

    public constructor() {}

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
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