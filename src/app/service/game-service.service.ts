import { Injectable } from '@angular/core';
import * as CONFIG from './../config/config';

@Injectable()
export class GameServiceService {
  public gamePad = CONFIG.gamePadSatus;
  public turn = 0;
  public gameNoticeBox = CONFIG.gameNoticeBox;
  player = true;
  board = [['', '', ''], ['', '', ''], ['', '', '']];
  constructor() { }

  checkWinner() {
    if (this.isARow() || this.isAColum() || this.isADiagonals()) {
      this.gameEnd();
    } else {
      if (this.turn === 8) {
        this.gameNoticeBox.text = 'Tie';
      }
    }
  }

  gameRestart() {
    for (let i = 0; i < 9; i++) {
      this.gamePad[i].status = false;
      this.gamePad[i].text = '';
    }
    this.gameNoticeBox.text = 'Player1 click a box';
    this.player = true;
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.turn = 0;
    this.setGameData();
  }

  drawGamePad(gamePad) {
    if (this.player) {
      gamePad.text = 'O';
      const [x, y] = gamePad.position;
      this.board[x][y] = gamePad.text;
      this.gameNoticeBox.text = 'Player2 click a box';
      this.player = false;
    } else {
      gamePad.text = 'X';
      const [x, y] = gamePad.position;
      this.board[x][y] = gamePad.text;
      this.player = true;
      this.gameNoticeBox.text = 'Player1 click a box';
    }
  }

  setGameData() {
    localStorage.setItem('save-board', JSON.stringify(this.board));
    localStorage.setItem('save-player', JSON.stringify(this.player));
    localStorage.setItem('save-textbox', this.gameNoticeBox.text);
    localStorage.setItem('save-turn', JSON.stringify(this.turn));
    localStorage.setItem('save-game-pad', JSON.stringify(this.gamePad));
  }

  getGameData() {
    this.board = JSON.parse(localStorage.getItem('save-board'));
    this.gamePad = JSON.parse(localStorage.getItem('save-game-pad'));
    this.player = JSON.parse(localStorage.getItem('save-player'));
    this.gameNoticeBox.text = localStorage.getItem('save-textbox');
    this.turn = JSON.parse(localStorage.getItem('save-turn'));
  }

  private gameEnd() {
    for (let i = 0; i < 9; i++) {
      this.gamePad[i].status = true;
    }
    if (this.player === false) {
      this.gameNoticeBox.text = 'Player1 wins';
    } else {
      this.gameNoticeBox.text = 'Player2 wins';
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

}

