import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../../../shared/services/socket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private socketService: SocketService,
    private router: Router,
  ) { }

  logout() {
    this.socketService.disconnect();
    this.router.navigate(['/login']);
  }
}
