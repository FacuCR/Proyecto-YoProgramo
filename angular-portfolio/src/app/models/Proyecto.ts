class Proyecto {
    protected _id: number = -1;
    protected _titulo: string = '';
    protected _descripcion: string = '';
    protected _url: string = '';
    protected _imagen: Imagen = new Imagen();

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

    public get imagen(): Imagen {
        return this._imagen;
    }
    public set imagen(value: Imagen) {
        this._imagen = value;
    }
}