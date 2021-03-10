import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form = { email: '', password: '' };

  public formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  get email() {
    return this.formGroup.get('email');
  }
  get password() {
    return this.formGroup.get('password');
  }

  public login(): void {
    const data = this.formGroup.getRawValue();

    this.authService.login().subscribe((res: User[]) => {
      this.authService.user = res[0];
      this.router.navigateByUrl('/');
    });
  }
}
