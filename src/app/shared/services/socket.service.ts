import { Injectable } from '@angular/core';
import * as socket from 'socket.io-client';
import { MessagesWereLoaded, MessageWasAdded, UsersWereLoaded } from '../actions/socket.actions';
import { Store } from '@ngrx/store';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  connection: any;

  constructor(
    private store: Store<State>,
    private authService: AuthService,
    private router: Router,
  ) { }

  connect(username) {
    this.connection = this.connectToSocket(username);

    this.connection.emit('app:load-messages');
    this.connection.on('app:messages-loaded', (data: any) => {
      this.store.dispatch(new MessagesWereLoaded(data.messages));
    });

    this.connection.emit('app:load-users');
    this.connection.on('app:users-loaded', (data: any) => {
      this.store.dispatch(new UsersWereLoaded(data.users));
    });

    this.connection.on('app:chat-message', (message: Message) => {
      this.store.dispatch(new MessageWasAdded(message));
    });

    this.connection.on('app:add-user', (data: any) => {
      this.authService.setUser(data.user);
      this.router.navigate(['/']);
    });
  }

  private connectToSocket(username: string) {
    const serverPort = 8080;
    const url = `${window.location.protocol}//localhost:${serverPort}`;
    const options: any = {
      'reconnection': true,
      'force new connection': true,
      'reconnection delay': 1000,
      'reconnection delay max': 5000,
      'query': `username=${username}`,
    };
    return socket.connect(url, options);
  }

  public disconnect() {
    if (!this.connection) {
      return;
    }
    this.authService.setUser(null);
    this.connection = this.connection.disconnect();
    this.connection = null;
  }

  public sendMessage(text: string, user: User) {
    this.connection.emit('app:send-message', {
      text,
      username: user.username,
    });
  }

}
