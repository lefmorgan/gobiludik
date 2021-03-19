import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { LoginUserComponent } from '../login/login-user/login-user.component';
import { AvatarEnum } from '../../shared/enums/avatar.enum';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user: User;
  public avatar = AvatarEnum;
  constructor(public authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    let userLinea = localStorage.getItem('user');
    this.user = JSON.parse(userLinea);
  }

  // --------------- ADD ------------------
  public loginUser() {
    const dialogRef = this.dialog.open(LoginUserComponent, {
      width: '400px',
      autoFocus: false,
      data: {},
    });
  }
}

enum PropertyType {
  House = 'House',
  Apartment = 'Apartment',
  Flat = 'Flat',
  Studio = 'Studio',
}
