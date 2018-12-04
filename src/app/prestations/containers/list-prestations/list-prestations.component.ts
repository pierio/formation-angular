import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  public prestations: Prestation[];
  public headers: string[];
  pipe = new JsonPipe;
  constructor(
    private ps: PrestationService
  ) { }

  ngOnInit() {
    this.prestations = this.ps.collection;
    this.headers = ['Type', 'Client', 'Nb Jours', 'TJM HT', 'Total HT', 'Total TTC', 'Statut'];
  }

}
