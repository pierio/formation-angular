import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {
  public prestation: Prestation;
  constructor(
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ar.data.subscribe((data: { prestation: Prestation }) => {
      this.prestation = data.prestation;
    });
  }

}
