import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: User | null = null;

  get user(): User | null {
    return this._user;
  }
  set user(value: User | null) {
    if (value) {
      window.localStorage.setItem('user', JSON.stringify(value));
      this._user = value;
    }
  }

  constructor(private http: HttpClient) {
    const value = window.localStorage.getItem('user');
    if (value) {
      this._user = new User(JSON.parse(value));
    }
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  public addUser(user: User): Observable<User> {
    user.id = Math.floor(Math.random() * Math.floor(999));
    const username = user.username;
    const email = user.email;
    const password = user.password;
    const avatar = user.avatar;
    return this.http.post<User>('http://localhost:3000/users', {
      username,
      email,
      password,
      avatar,
    });
  }
}
