import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { AddClientComponent } from './containers/add-client/add-client.component';

const appRoutes: Routes = [
  { path: '', component: PageClientsComponent },
  { path: 'add', component: AddClientComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class ClientsRoutingModule { }
