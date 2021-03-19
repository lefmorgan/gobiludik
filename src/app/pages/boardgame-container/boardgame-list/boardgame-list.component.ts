import { Component, OnInit } from '@angular/core';
import { Boardgame } from '../shared/boardgame.model';
import { BoardgameService } from '../shared/boardgame.service';

@Component({
  selector: 'app-boardgame-list',
  templateUrl: './boardgame-list.component.html',
  styleUrls: ['./boardgame-list.component.scss'],
})
export class BoardgameListComponent implements OnInit {
  boardgames: Boardgame[] = [];
  constructor(private boardgameService: BoardgameService) {
    this.boardgameService.getAllGames().subscribe((res) => {
      this.boardgames = res;
      window.localStorage.setItem('games', JSON.stringify(res));
    });
  }

  ngOnInit(): void {}
}
