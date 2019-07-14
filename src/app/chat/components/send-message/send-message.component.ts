import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SocketService } from '../../../shared/services/socket.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent {
  message: string;
  sendMessageForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private socketService: SocketService,
    private authService: AuthService,
  ) {
    this.sendMessageForm = this.formBuilder.group({
      message: this.formBuilder.control('', []),
    });
  }

  send() {
    const field = this.sendMessageForm.get('message');
    if (!field.value.length) {
      return;
    }
    this.socketService.sendMessage(field.value, this.authService.getUser());
    field.setValue('');
  }

  addUsernameToMessage(username: string) {
    const field = this.sendMessageForm.get('message');
    field.setValue(`${field.value}@${username}`);
  }

}
