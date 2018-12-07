import { JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  // public prestations: Prestation[];
  public prestations$: Observable<Prestation[]>;
  public headers: string[];
  pipe = new JsonPipe;
  // private sub: Subscription;
  constructor(
    private ps: PrestationService
  ) { }

  ngOnInit() {
    this.prestations$ = this.ps.collection$;
    // this.prestations = this.ps.collection;
    // this.sub = this.ps.collection$.subscribe((data) => {
    //   this.prestations = data;
    // });
    this.headers = ['Type', 'Client', 'Nb Jours', 'TJM HT', 'Total HT', 'Total TTC', 'Statut', 'Supprimer', 'Modifier'];
  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }
}
