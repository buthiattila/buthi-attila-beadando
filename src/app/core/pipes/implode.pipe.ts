import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'implode'
})
export class ImplodePipe implements PipeTransform {

  transform(value: string[], ...args: any[]): string {
    const beforeChar = args[0] ?? '';
    const separator = args[1] ?? ', ';

    return value.map(item => beforeChar+item).join(separator);

    //return value.map(item => `#${item}`).join(separator);
  }

}
