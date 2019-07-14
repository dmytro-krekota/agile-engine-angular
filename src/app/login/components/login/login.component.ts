import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { SocketService } from '../../../shared/services/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any;

  constructor(
    private socketService: SocketService,
    private formBuilder: FormBuilder,
  ) {
    this.socketService.disconnect();
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required]),
    });
  }

  login() {
    this.socketService.connect(this.loginForm.get('username').value);
  }
}
