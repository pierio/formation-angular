import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  public states = Object.values(State);
  public init = new Prestation();
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();
  constructor(
    private ps: PrestationService
    ) { }

  ngOnInit() {
  }

  public onSubmit(): void {
    this.nItem.emit(this.init);
  }

}
