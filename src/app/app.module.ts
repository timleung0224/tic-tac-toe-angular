import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameNoticeBoxComponent } from './game-notice-box/game-notice-box.component';
import { HeaderComponent } from './header/header.component';
import { GamePadComponent } from './game-pad/game-pad.component';
import { RestartBtnComponent } from './restart-btn/restart-btn.component';
import { GameServiceService } from './service/game-service.service';
import * as firebase from 'firebase/app';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

const config = {
  apiKey: 'AIzaSyApOI3y5QUQSDWKz54RMadRF9_yLQRan_E',
  authDomain: 'tic-tac-toe-angular-56743.firebaseapp.com',
  databaseURL: 'https://tic-tac-toe-angular-56743',
  projectId: 'tic-tac-toe-angular-56743',
  storageBucket: 'tic-tac-toe-angular-56743.appspot.com',
  messagingSenderId: '710699280063'
};

firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    GameNoticeBoxComponent,
    HeaderComponent,
    GamePadComponent,
    RestartBtnComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [GameServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
