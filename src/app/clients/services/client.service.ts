import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stateclient } from 'src/app/shared/enums/stateclient.enum';
import { Client } from 'src/app/shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _collection$: Observable<Client[]>;
  private clientsCollection: AngularFirestoreCollection<Client>;

  constructor(
    private afs: AngularFirestore
  ) {
    // this.collection = fakeClients;
    this.clientsCollection =  afs.collection<Client>('clients');
    this._collection$ = this.clientsCollection.valueChanges().pipe(
      map(data => data.map(client => new Client(client)))
    );
  }

  public get collection$(): Observable<Client[]> {
    return this._collection$;
  }

  public set collection$(col: Observable<Client[]>) {
    this._collection$ = col;
  }

  add(item: Client): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.clientsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post('urlapi/addprestation', item);
  }

  update(item: Client, state?: Stateclient): Promise<any> {
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.clientsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch('urlapi/Clientupdate/'+item.id, presta);
  }

  public delete(item: Client): Promise<any> {
    return this.clientsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlapi/Clients/delete/${item.id}`);
  }

  getClient(id: string): Observable<Client> {
    return this.clientsCollection.doc<Client>(id).valueChanges();
    // return this.http.get(`urlapi/Clients/get/${id}`);
  }
}
