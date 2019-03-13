import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game-service.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-restart-btn',
  templateUrl: './restart-btn.component.html',
  styleUrls: ['./restart-btn.component.css']
})
export class RestartBtnComponent implements OnInit {
  constructor(public gameService: GameService) { }
  private click = new Subject<string>();
  public turn = this.gameService.turn;

  ngOnInit(): void {
    this.click.pipe(
      debounceTime(300))
      .subscribe(() => {
        this.gameService.restartGameData();
        this.gameService.resetGameData();
      });
  }
  restartBtnClicked() {
    if (this.gameService.turn > 0) {
      // this.click.next();
      this.gameService.restartGameData();
      this.gameService.resetGameData();
    }
  }
}
