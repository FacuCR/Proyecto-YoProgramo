export class Tecnologia {
  protected _id: number = -1;
  protected _nombre: string = '';
  protected _color: string = '';
  protected _clase: string = '';

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

  public get clase(): string {
    return this._clase;
  }
  public set clase(value: string) {
    this._clase = value;
  }
}
