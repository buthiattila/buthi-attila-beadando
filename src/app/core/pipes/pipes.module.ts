import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LineBreaksPipe} from "./linebreaks.pipe";
import {ImplodePipe} from "./implode.pipe";

@NgModule({
  declarations: [
    LineBreaksPipe,
    ImplodePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LineBreaksPipe,
    ImplodePipe,
  ]
})
export class PipesModule {
}
