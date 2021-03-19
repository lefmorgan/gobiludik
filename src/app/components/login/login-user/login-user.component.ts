import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarEnum } from 'src/app/shared/enums/avatar.enum';
import { CreateUserComponent } from '../create-user/create-user.component';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {
  isWrongPassword = false;
  isCreateUser = false;

  loginForm: FormGroup;
  imageURL: string;
  hide = true;
  public avatar = AvatarEnum;
  /*
  public loginForm = new FormGroup({
    username: new FormControl('bob', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    file: new FormControl(''),
  });
  */

  avatars = [
    {
      id: 0,
      name: 'Marvel Green Goblin 1',
      img: '../../../../assets/gob1.jpg',
    },
    {
      id: 1,
      name: 'Marvel Green Goblin 2',
      img: '../../../../assets/gob2.jpg',
    },
    {
      id: 2,
      name: 'Marvel Green Goblin 3',
      img: '../../../../assets/gob3.jpg',
    },
  ];

  constructor(
    public authService: AuthService,
    private dialogRef: MatDialogRef<LoginUserComponent>,
    public dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }
  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      avatar: new FormControl(this.avatars[0].id),
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  // form error -----
  getErrorEmailMessage() {
    if (this.f.email.hasError('required')) {
      return 'Vous devez saisir votre email';
    }
    return this.f.email.hasError('email') ? 'Email non valide' : '';
  }

  public login(): void {
    const data = this.loginForm.getRawValue();
    this.authService.getUsers().subscribe((res: User[]) => {
      // console.log(res.find((item) => item.email === 'john.doe@web-atrio.com'));

      if (
        res.find((item) => item.email === data.email) &&
        res.find((item) => item.password === data.password)
      ) {
        let user = res.find((item) => item.email === data.email);
        this.authService.user = res[user.id - 1];
        this.close(false);
      } else {
        this.isWrongPassword = true;
        return;
      }
    });
  }

  public cancel() {
    this.close(false);
  }
  public close(value: boolean) {
    this.dialogRef.close(value);
  }

  // CREATION USER //

  public openCreateUser() {
    this.isCreateUser = true;
  }

  // Image Preview
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.loginForm.patchValue({
      avatarFile: file,
    });
    this.loginForm.get('avatar').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  public createUser() {
    const newUser = new User(this.loginForm.value);
    console.log(this.loginForm.value);
    this.authService.addUser(newUser).subscribe((res) => {
      this.close(false);
    });
  }
}
