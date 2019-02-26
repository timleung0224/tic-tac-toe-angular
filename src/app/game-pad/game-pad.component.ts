import { Component, OnInit } from '@angular/core';
import { initDomAdapter } from '@angular/platform-browser/src/browser';
import { identifierModuleUrl } from '@angular/compiler';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';

class Gamepad {
  id: string; position: string[]; text: string; clicked: boolean;
}
const gamepads1: Gamepad[] = [
  { id: '0', position: ['0', '0'], text: '', clicked: false, },
  { id: '1', position: ['0', '1'], text: '', clicked: false, },
  { id: '2', position: ['0', '2'], text: '', clicked: false, },
  { id: '3', position: ['1', '0'], text: '', clicked: false, },
  { id: '4', position: ['1', '1'], text: '', clicked: false, },
  { id: '5', position: ['1', '2'], text: '', clicked: false, },
  { id: '6', position: ['2', '0'], text: '', clicked: false, },
  { id: '7', position: ['2', '1'], text: '', clicked: false, },
  { id: '8', position: ['2', '2'], text: '', clicked: false, }
];

@Component({
  selector: 'app-game-pad',
  styleUrls: ['./game-pad.component.css'],
  templateUrl: './game-pad.component.html',
})
export class GamePadComponent implements OnInit {
  turn = false;
  public gamepad1 = gamepads1;
  ngOnInit() {
  }
  gamePadClicked(event: any, a: any) {
    if (a.clicked === false) {
      a.clicked = true;
      if (this.turn === false) {
        a.text = 'O';
        this.turn = true;
      } else {
        a.text = 'X';
        this.turn = false;
      }
    }
  }
}

