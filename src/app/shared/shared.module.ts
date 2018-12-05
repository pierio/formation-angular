import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './tableau/tableau.component';
import { StateDirective } from './directives/state.directive';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective],
  exports: [TotalPipe, TableauComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
