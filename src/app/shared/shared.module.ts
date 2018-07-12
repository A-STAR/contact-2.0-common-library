import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormModule } from 'contact2-common-lib';

@NgModule({
  imports: [
    CommonModule,
    FormModule,
  ],
  exports: [
    CommonModule,
    FormModule,
  ],
})
export class SharedModule {}
