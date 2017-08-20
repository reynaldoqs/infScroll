import { NgModule } from '@angular/core';
import {MdListModule, MdProgressSpinnerModule, MdToolbarModule, MdInputModule, MdIconModule} from '@angular/material';

@NgModule({
  imports: [MdListModule, MdProgressSpinnerModule, MdToolbarModule, MdInputModule, MdIconModule],
  exports: [MdListModule, MdProgressSpinnerModule, MdToolbarModule, MdInputModule, MdIconModule],
})
export class MyOwnCustomMaterialModule {}
