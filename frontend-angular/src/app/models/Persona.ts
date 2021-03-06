import { Educacion } from "./Educacion";
import { Localizacion } from "./Localizacion";
import { Proyecto } from "./Proyecto";
import { Tecnologia } from "./Tecnologia";

export class Persona {
  private _nombre: string = '';
  private _apellido: string = '';
  private _fechaNac: Date = new Date();
  private _ocupacion: string = '';
  private _disponible: boolean = false;
  private _sobreMi: string = '';
  private _descripcion: string = '';
  private _localizacion: Localizacion = new Localizacion();
  private _tecnologias: Tecnologia[] = [];
  private _educaciones: Educacion[] = [];
  private _proyectos: Proyecto[] = [];

  public constructor() {}

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }

  public get apellido(): string {
    return this._apellido;
  }
  public set apellido(value: string) {
    this._apellido = value;
  }

  public get fechaNac(): Date {
    return this._fechaNac;
  }
  public set fechaNac(value: Date) {
    this._fechaNac = value;
  }

  public get ocupacion(): string {
    return this._ocupacion;
  }
  public set ocupacion(value: string) {
    this._ocupacion = value;
  }

  public get isDisponible(): boolean {
    return this._disponible;
  }
  public set disponible(value: boolean) {
    this._disponible = value;
  }

  public get sobreMi(): string {
    return this._sobreMi;
  }
  public set sobreMi(value: string) {
    this._sobreMi = value;
  }

  public get descripcion(): string {
    return this._descripcion;
  }
  public set descripcion(value: string) {
    this._descripcion = value;
  }

  public get localizacion(): Localizacion {
    return this._localizacion;
  }
  public set localizacion(value: Localizacion) {
    this._localizacion = value;
  }

  public get tecnologias(): Tecnologia[] {
    return this._tecnologias;
  }
  public set tecnologias(value: Tecnologia[]) {
    this._tecnologias = value;
  }

  public get educaciones(): Educacion[] {
    return this._educaciones;
  }
  public set educaciones(value: Educacion[]) {
    this._educaciones = value;
  }

  public get proyectos(): Proyecto[] {
    return this._proyectos;
  }
  public set proyectos(value: Proyecto[]) {
    this._proyectos = value;
  }
}