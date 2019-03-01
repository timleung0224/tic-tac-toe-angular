import { Injectable } from '@angular/core';
import * as CONFIG from './../config/config';





@Injectable()
export class GameServiceService {
  public gamepad1 = CONFIG.gamepads1;
  public turn = 0;
  public textbox1 = CONFIG.textbox;
  public player = true;
  public board = [['', '', ''], ['', '', ''], ['', '', '']];
  constructor() { }

  private gameEnd() {
    for (let i = 0; i < 9; i++) {
      this.gamepad1[i].status = true;
    }
    if (this.player === false) {
      this.textbox1.text = 'Player1 wins';
    } else {
      this.textbox1.text = 'Player2 wins';
    }
  }

  private isARow() {
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2] && this.board[i][0] !== '') {
        return true;
      }
    }
  }

  private isAColum() {
    for (let i = 0; i < 3; i++) {
      if (this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i] && this.board[0][i] !== '') {
        return true;
      }
    }
  }

  private isADiagonals() {
    if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2] && this.board[0][0] !== '') {
      return true;
    }
    if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0] && this.board[1][1] !== '') {
      return true;
    }
  }

  checkWinner() {
    if (this.isARow() || this.isAColum() || this.isADiagonals()) {
      this.gameEnd();
    } else {

      if (this.turn === 8) {
        this.textbox1.text = 'Tie';
      }
    }
  }

  gameRestart() {
    for (let i = 0; i < 9; i++) {
      this.gamepad1[i].status = false;
      this.gamepad1[i].text = '';
    }
    this.textbox1.text = 'Player1 click a box';
    this.player = true;
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.turn = 0;
  }

  drawGamePad(gamepad) {
    if (this.player) {
      gamepad.text = 'O';
      const [x, y] = gamepad.position;
      this.board[x][y] = gamepad.text;
      this.textbox1.text = 'Player2 click a box';
      this.player = false;
    } else {
      gamepad.text = 'X';
      const [x, y] = gamepad.position;
      this.board[x][y] = gamepad.text;
      this.player = true;
      this.textbox1.text = 'Player1 click a box';
    }
  }

  loadGame() {
    const gameboardsave = JSON.parse(localStorage.getItem('save-board'));
    const gamepadsave = JSON.parse(localStorage.getItem('save-game-pad'));
    const playersave = JSON.parse(localStorage.getItem('save-player'));
    const textboxsave = localStorage.getItem('save-textbox');
    const turnsave = JSON.parse(localStorage.getItem('save-turn'));
    this.board = gameboardsave;
    this.gamepad1 = gamepadsave;
    this.player = playersave;
    this.textbox1.text = textboxsave;
    this.turn = turnsave;
    // console.log(gamepadsave);
  }
}

