import { TextoComponent } from './texto/texto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [TextoComponent],
  declarations: [TextoComponent]
})
export class TallerModule { }
