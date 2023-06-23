import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'lineBreaks'})
export class LineBreaksPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    const defaultDOM = '<br>';
    const counts = args[0] ?? 1;
    const DOM = args[1] ?? defaultDOM;
    let replaceDOM = '';

    for (let i = 0; i < counts; i++) {
      replaceDOM += DOM;
    }

    return value.replace(/\n/g, replaceDOM);
  }

}
