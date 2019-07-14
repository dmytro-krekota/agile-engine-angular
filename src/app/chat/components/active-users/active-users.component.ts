import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { selectUsers } from '../../../shared/selectors/socket.selector';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../../shared/services/auth.service';
import { SendMessageComponent } from '../send-message/send-message.component';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit, OnDestroy {
  users: User[];
  unsubscribe$: Subject<void> = new Subject<void>();
  currentUser: User;
  @Input() sendMessage: SendMessageComponent;

  constructor(
    private store: Store<State>,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.store.select(selectUsers).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((data) => {
      this.users = data;
    });
    this.currentUser = this.authService.getUser();
  }

  addUsernameToMessage(username: string) {
    this.sendMessage.addUsernameToMessage(username);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
