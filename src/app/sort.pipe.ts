import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(value: any, propName: any): any {
    value.sort((a: any, b: any) => {
     if (a[propName] < b[propName]) {
       return -1;
     } else if (a[propName] > b[propName]) {
       return 1;
     } else {
       return 0;
     }
   });
   return value;
  }
}
