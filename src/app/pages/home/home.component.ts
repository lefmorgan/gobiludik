import { Component, OnInit } from '@angular/core';
import { Boardgame } from '../boardgame-container/shared/boardgame.model';
import { BoardgameService } from '../boardgame-container/shared/boardgame.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private boardgameService: BoardgameService) {}
  boardgames: any[] = [];
  ngOnInit(): void {
    this.getRedditBoardgame();
  }
  getRedditBoardgame() {
    this.boardgameService.getRedditBoardgame().subscribe((res) => {
      this.boardgames = res.games;
      //  window.localStorage.setItem('boardgameHome', JSON.stringify(res));
    });
  }
}
