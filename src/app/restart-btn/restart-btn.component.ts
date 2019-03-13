import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game-service.service';

@Component({
  selector: 'app-restart-btn',
  templateUrl: './restart-btn.component.html',
  styleUrls: ['./restart-btn.component.css']
})
export class RestartBtnComponent implements OnInit {
  constructor(public gameService: GameService) { }
  public turn = this.gameService.turn;

  ngOnInit() {
  }

  restartBtnClicked() {
    if (this.gameService.turn > 0) {
      this.gameService.restartGameData();
      this.gameService.resetGameData();
    }
  }
}
