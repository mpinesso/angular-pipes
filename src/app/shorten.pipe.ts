import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform{

  transform(value: any, limitParam: number, startParam?: number, offsetParam?: number){

    let limit = 0;
    let start = 0;

    if(offsetParam !== undefined){
      limit = offsetParam;
      start = offsetParam;
    }
    if(limitParam !== undefined){
      limit += limitParam;
    }
    if(startParam !== undefined){
      start += startParam;
    }

    if(value.length > limit){
      return value.substr(start, limit) + '...';
    }
    return value;
  }
}
