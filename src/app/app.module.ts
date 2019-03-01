import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TexboxComponent } from './texbox/texbox.component';
import { HeaderComponent } from './header/header.component';
import { GamePadComponent } from './game-pad/game-pad.component';
import { RestartBtnComponent } from './restart-btn/restart-btn.component';
import { GameServiceService } from './service/game-service.service';
import { GameStorage } from './service/game-service.storage';


@NgModule({
  declarations: [
    AppComponent,
    TexboxComponent,
    HeaderComponent,
    GamePadComponent,
    RestartBtnComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [GameServiceService, GameStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
