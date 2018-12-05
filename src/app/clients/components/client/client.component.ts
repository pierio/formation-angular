import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { Stateclient } from 'src/app/shared/enums/stateclient.enum';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input() client: Client;
  public states = Object.values(Stateclient);
  constructor(
    private cs: ClientService
    ) { }

  ngOnInit() {
  }

  changeState(event) {
    const state = event.target.value;
    this.cs.update(this.client, state);
  }

}
