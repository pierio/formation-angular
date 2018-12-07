import { Component, OnInit } from '@angular/core';
import { LinksI } from 'src/app/shared/interfaces/links-i';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {
  public listLinks: LinksI[];
  constructor() { }

  ngOnInit() {
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
