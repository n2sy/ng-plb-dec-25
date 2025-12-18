import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], selStatus: string): any[] {
    if (!selStatus.length) {
      return value;
    }
    // let filtredValue = [];
    // for (const serv of value) {
    //   if (serv['statut'] == selStatus) filtredValue.push(serv);
    // }
    // return filtredValue;
    return value.filter((serv) => serv['statut'] == selStatus);
  }
}
