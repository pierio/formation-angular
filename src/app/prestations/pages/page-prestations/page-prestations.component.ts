import { Component, OnInit, Input } from '@angular/core';
import { LinksI } from 'src/app/shared/interfaces/links-i';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public title$: Observable<string>;
  public listLinks: LinksI[];
  constructor(
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title$ = this.ar.data.pipe(
      pluck('title')
      );
    this.listLinks = [
      {
        route: 'detail',
        label: 'Détail'
      },
      {
        route: 'comment',
        label: 'Commentaire'
      }
    ];
  }

}
