export class Redes {
    protected _id: number = -1;
    protected _url: string = '';
    protected _nombre: string = '';
    protected _clase: string = '';

    public constructor() {}

    public get url(): string {
        return this._url;
    }
    public set url(value: string) {
        this._url = value;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get clase(): string {
        return this._clase;
    }
    public set clase(value: string) {
        this._clase = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}