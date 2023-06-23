import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LineBreaksPipe} from "./linebreaks.pipe";

@NgModule({
  declarations: [
    LineBreaksPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LineBreaksPipe,
  ]
})
export class PipesModule {
}
