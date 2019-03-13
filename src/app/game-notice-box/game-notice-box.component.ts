import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game-service.service';

@Component({
  selector: 'app-game-notice-box',
  templateUrl: './game-notice-box.component.html',
  styleUrls: ['./game-notice-box.component.css']
})
export class GameNoticeBoxComponent implements OnInit {
  public noticeBox: any;
  constructor(public gameService: GameService) {
  }

  ngOnInit() {
    this.noticeBox = this.gameService.gameNoticeBox;
  }
}
