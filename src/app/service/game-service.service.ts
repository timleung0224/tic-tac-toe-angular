import { Injectable } from '@angular/core';
import * as CONFIG from './../config/config';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable()
export class GameServiceService {
  gamePad = CONFIG.gamePadSatus;
  turn = 0;
  gameNoticeBox = CONFIG.gameNoticeBox;
  player = 'player1';
  gameData = firebase.firestore().collection('gameData').doc('01');
  gamePadData = firebase.firestore().collection('gamePad');
  board = [['', '', ''], ['', '', ''], ['', '', '']];
  saveBoard = '';
  public restarting = false;

  constructor() { }

  checkWinner() {
    if (this.isARow() || this.isAColum() || this.isADiagonals()) {
      this.gameEnd();
    } else if (this.turn === 9) {
      this.gameNoticeBox.text = 'Tie';
    } else {
      if (this.turn === 0) {
        this.gameNoticeBox.text = 'Player1 click a box';
      } else {
        if (this.player === 'player1') {
          this.gameNoticeBox.text = 'Player2 click a box';
        } else { this.gameNoticeBox.text = 'Player1 click a box'; }
      }
    }
  }

  restartGameData() {
    for (let i = 0; i < 9; i++) {
      this.gamePad[i].status = true;
    }
    this.player = 'player2';
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.turn = 0;
  }

  drawGamepad(gamePad) {
    for (let i = 0; i < 9; i++) {
      if (this.player === 'player1') {
        gamePad.text = 'O';
      } else {
        gamePad.text = 'X';
      }
    }
  }

  updateGameData(gamePad) {
    const [x, y] = gamePad.position;
    this.board[x][y] = this.player;
    gamePad.status = true;
    this.turn++;
  }

  setGameData(gamePad) {
    this.saveBoard = JSON.stringify(this.board);
    if (this.player === 'player1') {
      this.player = 'player2';
    } else {
      this.player = 'player1';
    }
    this.gameData.set({
      player: this.player,
      board: this.saveBoard,
      turn: this.turn
    });
    this.gamePadData.doc(`${gamePad.id}`).set({
      status: gamePad.status,
    });
  }

  resetGameData() {
    this.saveBoard = JSON.stringify(this.board),
      this.gameData.set({
        player: this.player,
        turn: this.turn,
        board: this.saveBoard
      }).then(() => {
        this.getGameData();
      });
    for (let i = 0; i < 9; i++) {
      this.gamePadData.doc(`${[i]}`).set({
        status: false,
      });
    }
  }

  getGameData() {
    this.gameData.get().then(doc => {
      this.saveBoard = doc.data().board;
      this.board = JSON.parse(this.saveBoard);
      this.turn = doc.data().turn;
      this.player = doc.data().player;
    }).then(() => {
      this.checkWinner();
    }).then(() => {
      this.drawGetGamepad();
    });
    this.gamePadData.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.gamePad[doc.id].status = doc.data().status;
      });
    });
  }

  private gameEnd() {
    for (let i = 0; i < 9; i++) {
      this.gamePad[i].status = true;
    }
    if (this.player === 'player1') {
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

  private drawGetGamepad() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === 'player1') {
          this.gamePad[3 * i + j].text = 'X';
        } else if (this.board[i][j] === 'player2') {
          this.gamePad[3 * i + j].text = 'O';
        } else { this.gamePad[3 * i + j].text = this.board[i][j]; }
      }
    }
  }
}

