import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iniciales'
})
export class InicialesPipe implements PipeTransform {

  transform(value: string): string {
    if (value == "Cargando...")
      return "";
    const arraySplit: string[] = value.split(' ');
    let iniciales = '';
    arraySplit.forEach((element: string) => {
      iniciales += element[0];
    });
    return iniciales;
  }

}
