import { Injectable } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake-prestation';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private _collection: Prestation[];

  constructor() {
    this.collection = fakePrestations;
  }

  public get collection(): Prestation[] {
    return this._collection;
  }

  public set collection(col: Prestation[]) {
    this._collection = col;
  }

  public addPrestation(prest: Prestation): void {
     this.collection.push(new Prestation(prest));
  }

  public update(prestation: Prestation, state: State) {
    prestation.state = state;
  }
}
