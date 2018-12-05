import { Injectable } from '@angular/core';
import { Stateclient } from 'src/app/shared/enums/stateclient.enum';
import { Client } from 'src/app/shared/models/client';
import { fakeClients } from './fake-client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _collection: Client[];

  constructor() {
    this.collection = fakeClients;
  }

  public get collection(): Client[] {
    return this._collection;
  }

  public set collection(col: Client[]) {
    this._collection = col;
  }

  public update(client: Client, state: Stateclient) {
    client.state = state;
  }
}
