import { Injectable } from '@angular/core';
import * as CONFIG from './../config/config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';







@Injectable()
export class GameServiceService {
  public gamePad = CONFIG.gamePadSatus;
  public turn = 0;
  public gameNoticeBox = CONFIG.gameNoticeBox;
  player = true;
  gameData = firebase.firestore().collection('gameData').doc('01');
  gamePadData = firebase.firestore().collection('gamePad');
  board = [['', '', ''], ['', '', ''], ['', '', '']];
  saveBoard = '';

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
    this.resetGameData();
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

  setGameData(gamePad) {
    this.gamePadData.doc(`${gamePad.id}`).set({
      status: gamePad.status,
      text: gamePad.text,
    });
    // console.log(`gamePad${gamePad.id}`);
    this.saveBoard = JSON.stringify(this.board),
      this.gameData.set({
        gameNoticeBox: this.gameNoticeBox,
        player: this.player,
        turn: this.turn,
        board: this.saveBoard
      });
  }

  getGameData() {
    this.gamePadData.get().then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data().text);
        this.gamePad[doc.id].text = doc.data().text;
        this.gamePad[doc.id].status = doc.data().status;
        // console.log(data(doc.id).text);
      });
    });

    this.gameData.get().then(doc => {
      this.gameNoticeBox.text = doc.data().gameNoticeBox.text;
      this.player = doc.data().player;
      this.turn = doc.data().turn;
      this.saveBoard = doc.data().board;
      this.board = JSON.parse(this.saveBoard);
      // console.log(doc.data().board);
      // console.log(this.board);
    });
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

  private resetGameData() {
    for (let i = 0; i < 9; i++) {
      this.gamePadData.doc(`${[i]}`).set({
        status: this.gamePad[i].status,
        text: this.gamePad[i].text,
      });
    }
    this.saveBoard = JSON.stringify(this.board),
      this.gameData.set({
        gameNoticeBox: this.gameNoticeBox,
        player: this.player,
        turn: this.turn,
        board: this.saveBoard
      });
  }
}

