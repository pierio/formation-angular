import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  public clients: Client[];
  public headers: string[];

  constructor(
    private cs: ClientService
  ) { }

  ngOnInit() {
    this.clients = this.cs.collection;
    this.headers = ['Nom', 'Email', 'Statut'];
  }

}
