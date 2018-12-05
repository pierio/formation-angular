import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Stateclient } from 'src/app/shared/enums/stateclient.enum';
import { Client } from 'src/app/shared/models/client';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-reactive-client',
  templateUrl: './form-reactive-client.component.html',
  styleUrls: ['./form-reactive-client.component.scss']
})
export class FormReactiveClientComponent implements OnInit {
  public states = Object.values(Stateclient);
  public init = new Client();
  public form: FormGroup;
  @Output() nItem: EventEmitter<Client> = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      name : [
        this.init.name,
        Validators.required
      ],
      email : [
        this.init.email,
        Validators.compose([Validators.required, Validators.email])
      ],
      state : [this.init.state]
    });
  }

  public onSubmit(): void {
    this.nItem.emit(this.form.value);
  }

  public isError(nfc: string): boolean {
    return this.form.get(nfc).invalid && this.form.get(nfc).touched;
  }

}
