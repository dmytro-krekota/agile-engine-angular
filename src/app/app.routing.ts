import { ChatComponent } from './chat/components/chat/chat.component';
import { LoginComponent } from './login/components/login/login.component';

export const APP_ROUTING = [
  { path: '', component: ChatComponent },
  { path: 'login', component: LoginComponent }
];
