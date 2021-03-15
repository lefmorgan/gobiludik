import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user: User;
  constructor() {}

  ngOnInit(): void {
    let userLinea = localStorage.getItem('user');
    this.user = JSON.parse(userLinea);
  }
}
