import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../service/game-service.service';

@Component({
  selector: 'app-game-notice-box',
  templateUrl: './game-notice-box.component.html',
  styleUrls: ['./game-notice-box.component.css']
})
export class GameNoticeBoxComponent implements OnInit {
  public noticeBox: any;
  constructor(public gameService: GameServiceService) {
  }

  ngOnInit() {
    this.noticeBox = this.gameService.gameNoticeBox;
  }

}
