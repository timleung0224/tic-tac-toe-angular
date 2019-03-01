import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../service/game-service.service';

@Component({
  selector: 'app-restart-btn',
  templateUrl: './restart-btn.component.html',
  styleUrls: ['./restart-btn.component.css']
})
export class RestartBtnComponent implements OnInit {

  constructor(public gameservice: GameServiceService) { }

  ngOnInit() {
  }
  reatartBtnClicked() {
    this.gameservice.gameRestart();
  }
}
