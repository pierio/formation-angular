import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientComponent } from './components/client/client.component';
import { CommentClientComponent } from './components/comment-client/comment-client.component';
import { FormReactiveClientComponent } from './components/form-reactive-client/form-reactive-client.component';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [PageClientsComponent, ClientComponent, ListClientsComponent, AddClientComponent, FormReactiveClientComponent, PageAddClientComponent, CommentClientComponent, DetailClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
