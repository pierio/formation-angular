import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {
  public title: string;
  constructor(
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ar.data.subscribe((data) => {
      this.title = data.title;
    });
  }

}
