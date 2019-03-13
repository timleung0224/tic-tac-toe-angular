import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game-service.service';

@Component({
  selector: 'app-game-pad',
  styleUrls: ['./game-pad.component.css'],
  templateUrl: './game-pad.component.html',
})
export class GamePadComponent implements OnInit {
  public gamePad: any;
  public restarting: boolean;

  constructor(public gameService: GameService) {
  }

  ngOnInit() {
    this.gamePad = this.gameService.gamePad;
    this.restarting = this.gameService.restarting;
    this.gameService.getGameData();
  }

  gamePadClicked(gamePad: any) {
    if (!gamePad.status && !this.restarting) {
      this.gameService.updateGameData(gamePad);
      this.gameService.setGameData(gamePad);
      this.gameService.checkWinner();
      this.gameService.drawGamepad(gamePad);
    }
  }
}

