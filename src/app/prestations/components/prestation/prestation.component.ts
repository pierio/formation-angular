import { Component, Input, OnInit } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() prestation: Prestation;
  public states = Object.values(State);
  public faTrashAlt = faTrashAlt;
  public faEdit = faEdit;
  constructor(
    private ps: PrestationService
  ) { }

  ngOnInit() {
  }

  changeState(event) {
    const state = event.target.value;
    this.ps.update(this.prestation, state).then((data) => {
      // response api
      this.prestation.state = state;
    });
    // this.ps.update(this.prestation, state).subscribe((data) => {
    //   // response api
    //   this.prestation.state = state;
    // });
  }

  public delete() {
    this.ps.delete(this.prestation).then((data) => {
      //
    });
    // this.ps.delete(prestation).subscribe((data) => {
    //   //
    // });
  }

  public getDetail() {
    this.ps.presta$.next(this.prestation);
  }
}
