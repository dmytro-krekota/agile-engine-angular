import { Component } from '@angular/core';
import { Router, NavigationStart, RouterEvent } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { first } from 'rxjs/operators';
import { SocketService } from './shared/services/socket.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private socketService: SocketService,
  ) {
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      this.authService.setUser(user);
      this.socketService.connect(user.username);
    }
    router.events.subscribe(this.onRouterEvent.bind(this));
  }

  onRouterEvent(event: RouterEvent) {
    if (event instanceof NavigationStart) {
      const user = this.authService.getUser();
      const loginUrl = '/login';
      const isLoginUrl = event.url === loginUrl;
      if (!isLoginUrl && !user) {
        this.router.navigate([loginUrl]);
      }
      if (isLoginUrl && user) {
        this.router.navigate(['/']);
      }
    }
  }
}
