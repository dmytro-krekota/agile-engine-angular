import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routing';
import { ChatModule } from './chat/chat.module';
import { LoginModule } from './login/login.module';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { socketReducer } from './shared/reducers/socker.reducer';

export const reducers: ActionReducerMap<State> = {
  socket: socketReducer,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    ChatModule,
    LoginModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTING, {
      useHash: true
    }),
    StoreModule.forRoot(reducers, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
