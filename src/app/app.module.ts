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



@NgModule({
  declarations: [
    AppComponent,
    GameNoticeBoxComponent,
    HeaderComponent,
    GamePadComponent,
    RestartBtnComponent
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
