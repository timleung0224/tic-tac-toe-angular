import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../service/game-service.service';
import { GameStorage } from '../service/game-service.storage';

@Component({
  selector: 'app-game-pad',
  styleUrls: ['./game-pad.component.css'],
  templateUrl: './game-pad.component.html',
})
export class GamePadComponent implements OnInit {

  constructor(public gameservice: GameServiceService, public gamestorage: GameStorage) { }
  ngOnInit() {
    this.gameservice.loadGame();
    // this.gameservice.gameRestart();
  }
  gamePadClicked(gamepad: any) {
    if (!gamepad.status) {
      gamepad.status = true;
      this.gameservice.drawGamePad(gamepad);
      this.gameservice.checkWinner();
      this.gameservice.turn++;
      this.gamestorage.setBoard(this.gameservice.board);
      this.gamestorage.setGamePad(this.gameservice.gamepad1);
      this.gamestorage.setPlayer(this.gameservice.player);
      this.gamestorage.setTextbox(this.gameservice.textbox1.text);
      this.gamestorage.setTurn(this.gameservice.turn);


    }
  }
}

