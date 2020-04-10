import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AixUiModule } from '@ai21/aix-ui';

import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AixUiModule
  ],
  exports: [
    MenuComponent
  ],
})
export class SharedModule { }
