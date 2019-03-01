import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../service/game-service.service';


@Component({
  selector: 'app-game-pad',
  styleUrls: ['./game-pad.component.css'],
  templateUrl: './game-pad.component.html',
})
export class GamePadComponent implements OnInit {
  public gamePad: any;


  constructor(public gameService: GameServiceService) {
  }
  ngOnInit() {
    this.gameService.getGameData();

    this.gamePad = this.gameService.gamePad;
  }

  gamePadClicked(gamePad: any) {
    if (!gamePad.status) {
      gamePad.status = true;
      this.gameService.drawGamePad(gamePad);
      this.gameService.checkWinner();
      this.gameService.turn++;
      this.gameService.setGameData();
    }
  }
}

