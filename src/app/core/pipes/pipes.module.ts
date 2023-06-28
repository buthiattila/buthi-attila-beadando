import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LineBreaksPipe} from "./linebreaks.pipe";
import {ImplodePipe} from "./implode.pipe";
import {ArrayfilterPipe} from "./arrayfilter.pipe";

@NgModule({
  declarations: [
    LineBreaksPipe,
    ImplodePipe,
    ArrayfilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LineBreaksPipe,
    ImplodePipe,
    ArrayfilterPipe
  ]
})
export class PipesModule {
}
