import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if (value.length === 0 || filterString === ''){
      return value;
    }

    const shows = [];
    for (const show of value){
      if(show.movie['title'] === filterString){
        shows.push(show);
      }
    }
    return shows;
  }

}
