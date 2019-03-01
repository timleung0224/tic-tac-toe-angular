import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../service/game-service.service';

@Component({
  selector: 'app-texbox',
  templateUrl: './texbox.component.html',
  styleUrls: ['./texbox.component.css']
})
export class TexboxComponent implements OnInit {
  constructor(public gameservice: GameServiceService) { }

  ngOnInit() {
  }

}
