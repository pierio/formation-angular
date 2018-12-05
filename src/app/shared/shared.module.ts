import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddRowComponent } from './components/add-row/add-row.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './tableau/tableau.component';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective, AddRowComponent],
  exports: [TotalPipe, TableauComponent, StateDirective, AddRowComponent, TemplatesModule],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    TemplatesModule
  ]
})
export class SharedModule { }
