import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;

  setUser(user: User) {
    this.user = user;
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(this.user));
    } else {
      sessionStorage.removeItem('user');
    }
  }

  getUser() {
    return this.user;
  }
}
