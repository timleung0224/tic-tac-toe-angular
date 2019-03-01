import { Injectable } from '@angular/core';


@Injectable()
export class GameStorage {
  // constructor(public gameservice: GameServiceService) { }

  setBoard(board) {
    localStorage.setItem('save-board', JSON.stringify(board));
  }
  setGamePad(gamepad1) {
    localStorage.setItem('save-game-pad', JSON.stringify(gamepad1));
  }
  setPlayer(player) {
    localStorage.setItem('save-player', JSON.stringify(player));
  }
  setTextbox(textbox) {
    localStorage.setItem('save-textbox', textbox);
  }
  setTurn(turn) {
    localStorage.setItem('save-turn', JSON.stringify(turn));
  }
}
