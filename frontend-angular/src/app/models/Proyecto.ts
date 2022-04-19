export class Proyecto {
    private _id: number = -1;
    private _titulo: string = '';
    private _descripcion: string = '';
    private _url: string = '';
    private _imagenUrl: string = '';

    public constructor() {}

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }

    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }

    public get url(): string {
        return this._url;
    }
    public set url(value: string) {
        this._url = value;
    }

    public get imagenUrl(): string {
        return this._imagenUrl;
    }
    public set imagenUrl(value: string) {
        this._imagenUrl = value;
    }
}