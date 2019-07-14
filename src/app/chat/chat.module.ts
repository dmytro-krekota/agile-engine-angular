import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './components/chat/chat.component';
import { NavbarModule } from '../navbar/navbar.module';
import { SharedModule } from '../shared/shared.module';
import { ChatMessagesComponent } from './components/chat-messages/chat-messages.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';

@NgModule({
  declarations: [
    ChatComponent,
    ChatMessagesComponent,
    SendMessageComponent,
    ActiveUsersComponent,
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: []
})
export class ChatModule { }
