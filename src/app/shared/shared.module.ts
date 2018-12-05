import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './tableau/tableau.component';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective],
  exports: [TotalPipe, TableauComponent, StateDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
