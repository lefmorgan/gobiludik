import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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
  form: FormGroup;
  isWrongPassword = false;
  public formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    public authService: AuthService,
    private router: Router
  ) {}

  get email() {
    return this.formGroup.get('email');
  }

  get password() {
    return this.formGroup.get('password');
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.renderer.setStyle(
      this.el.nativeElement.ownerDocument.body,
      'backgroundColor',
      '#000'
    );
  }

  public login(): void {
    const data = this.formGroup.getRawValue();

    this.authService.getUsers().subscribe((res: User[]) => {
      console.log(res.find((item) => item.email === 'john.doe@web-atrio.com'));

      if (
        res.find((item) => item.email === data.email) &&
        res.find((item) => item.password === data.password)
      ) {
        this.authService.user = res[0];
        this.router.navigateByUrl('/');
      } else {
        this.isWrongPassword = true;
        return;
      }
    });
  }
}
