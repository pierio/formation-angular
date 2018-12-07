import { Component, OnInit, Input } from '@angular/core';
import { LinksI } from '../../interfaces/links-i';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() listLinks: LinksI[];
  constructor() { }

  ngOnInit() {
  }

}
