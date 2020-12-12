import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = environment.url;

  loginUrl: string = '/user/login';
  registerUrl: string = '/user/register';

  constructor(private http: HttpClient) { }

  login(data): Observable<User> {
    return this.http.post<User>(this.url + this.loginUrl, data);
  }

  register(data: User): Observable<User> {
    return this.http.post<User>(this.url + this.registerUrl, data);
  }

  logout() {
    localStorage.clear();
  }

  saveUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  get get() {
    return JSON.parse(localStorage.getItem('user'));
  }

  get getToken() {
    return localStorage.getItem('token');
  }
  
  get isLoggedIn() {
    return localStorage.getItem('token') ? true : false;
  }

}
