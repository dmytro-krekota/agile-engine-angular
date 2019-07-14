import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectMessages } from '../../../shared/selectors/socket.selector';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SendMessageComponent } from '../send-message/send-message.component';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit, OnDestroy {
  messages: Message[];
  unsubscribe$: Subject<void> = new Subject<void>();
  @Input() sendMessage: SendMessageComponent;

  constructor(
    private store: Store<State>,
  ) {
  }

  ngOnInit() {
    this.store.select(selectMessages).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((data) => {
      this.messages = data;
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  addUsernameToMessage(username: string) {
    this.sendMessage.addUsernameToMessage(username);
  }
}
