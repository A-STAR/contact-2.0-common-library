import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LabelComponent } from './label/label.component';
import { TextComponent } from './text/text.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    LabelComponent,
    TextComponent,
  ],
  declarations: [
    LabelComponent,
    TextComponent,
  ],
})
export class FormModule {}
