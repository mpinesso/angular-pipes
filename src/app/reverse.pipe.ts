import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    let ris = '';
    for(let i = value.length -1; i >= 0; i--){
      ris += value[i];
    }
    return ris;
  }
}
