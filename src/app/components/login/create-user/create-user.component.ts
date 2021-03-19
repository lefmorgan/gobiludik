import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<CreateUserComponent>) {}

  public createUserForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  /*
  "username": "John Doe",
  "email": "john.doe@web-atrio.com",
  "password": "john.doe@web-atrio.com",
  "avatar": "",
  "statId": 1
*/
  ngOnInit(): void {}

  get email() {
    return this.createUserForm.get('email');
  }

  get password() {
    return this.createUserForm.get('password');
  }

  public cancel() {
    this.close(false);
  }
  public close(value: boolean) {
    this.dialogRef.close(value);
  }

  createUser() {}

  // form error -----
  getErrorEmailMessage() {
    if (this.email.hasError('required')) {
      return 'Vous devez saisir votre email';
    }
    return this.email.hasError('email') ? 'Email non valide' : '';
  }
}
