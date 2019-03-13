import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameNoticeBoxComponent } from './game-notice-box/game-notice-box.component';
import { HeaderComponent } from './header/header.component';
import { GamePadComponent } from './game-pad/game-pad.component';
import { RestartBtnComponent } from './restart-btn/restart-btn.component';
import { GameService } from './service/game-service.service';
import * as firebase from 'firebase/app';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { environment } from '../environments/environment';

const config = environment.FIREBASE_CONFIG;

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
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
