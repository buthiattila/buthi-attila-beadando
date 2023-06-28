import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'arrayFilter'})
export class ArrayfilterPipe implements PipeTransform {

  transform(items: any[], category: string): any[] {
    if (!items || !category) {
      return items;
    }

    return items.filter(item => item.category.includes(category));
  }

}
