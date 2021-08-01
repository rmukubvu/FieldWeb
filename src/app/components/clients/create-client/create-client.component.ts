import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../service/client.service';
import {Client} from '../model/client.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'field-eye-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  createForm: FormGroup;
  show: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private clientService: ClientService,
              private _snackBar: MatSnackBar ) {
  }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      accountNumber: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onSubmit() {
    this.show = true;
    let clientPayload = new Client(this.createForm.value);

    this.clientService.add(clientPayload).subscribe(data => {
        this.createForm.reset();
        this._snackBar.open("Client has been created", 'Close');
        this.show = false;
      },
      (error) => {
        console.log('client' + error.message);
        this.show = false;
      });
  }

}
