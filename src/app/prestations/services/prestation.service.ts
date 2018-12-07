import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private _collection$: Observable<Prestation[]>;
  private prestationsCollection: AngularFirestoreCollection<Prestation>;
  public presta$: BehaviorSubject<Prestation> = new BehaviorSubject(null);
  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
  ) {
    // this.collection = fakePrestations;
    this.prestationsCollection = afs.collection<Prestation>('prestations');
    this._collection$ = this.prestationsCollection.valueChanges().pipe(
      // map(data => data.map(prestation => new Prestation(prestation)));
      map((data) => {
        if (data.length > 0) {
        this.presta$.next(new Prestation(data[0]));
        return data.map((prestation) => {
          return new Prestation(prestation);
        });
      }
      this.presta$.next(null);
      return null;
      })
    );
    // this._collection$ = this.http.get(`${URL_API}/prestations`).pipe(
    //   map(data => data.map(prestation => new Prestation(prestation)))
    // );
  }

  public get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  public set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.prestationsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post(`${URL_API}/prestation`, item);
  }


  update(item: Prestation, state?: State): Promise<any> {
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.prestationsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch(`${URL_API}/prestation/${item.id}, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.prestationsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`${URL_API}/prestation/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.prestationsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlapi/prestations/get/${id}`);
  }
}
