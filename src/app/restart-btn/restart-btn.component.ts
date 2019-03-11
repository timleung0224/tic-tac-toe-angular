import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../service/game-service.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-restart-btn',
  templateUrl: './restart-btn.component.html',
  styleUrls: ['./restart-btn.component.css']
})
export class RestartBtnComponent implements OnInit {
  constructor(public gameservice: GameServiceService, ) { }
  click = new Subject<string>();
  turn = this.gameservice.turn;

  ngOnInit(): void {
    this.click.pipe(
      debounceTime(300))
      .subscribe(() => {
        this.gameservice.restartGameData();
        this.gameservice.resetGameData();
      });
  }
  restartBtnClicked() {
    if (this.gameservice.turn > 0) {
      this.click.next();
    }
  }
}
