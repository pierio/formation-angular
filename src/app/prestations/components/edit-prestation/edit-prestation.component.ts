import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
  @Input() public prestation: Prestation;
  constructor(
    private ps: PrestationService,
    private router: Router,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  update(prestation: Prestation) {
    prestation.id = this.prestation.id;
    this.ps.update(prestation).then((data) => {
      this.router.navigate(['prestations']);
    });
  }

}
