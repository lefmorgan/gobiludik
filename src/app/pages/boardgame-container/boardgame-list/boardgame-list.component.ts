import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Boardgame } from '../shared/boardgame.model';
import { BoardgameService } from '../shared/boardgame.service';

@Component({
  selector: 'app-boardgame-list',
  templateUrl: './boardgame-list.component.html',
  styleUrls: ['./boardgame-list.component.scss'],
})
export class BoardgameListComponent implements OnInit {
  boardgames: Boardgame[] = [];
  displayedColumns: string[] = ['img', 'name', 'player', 'rank', 'price'];
  dataSource: MatTableDataSource<Boardgame>;
  constructor(private boardgameService: BoardgameService) {}

  ngOnInit() {
    if (!localStorage.boardgames) {
      this.getAllBoardgames();
    } else {
      this.boardgames.push(JSON.parse(localStorage.boardgames));
      this.dataSource = new MatTableDataSource(
        JSON.parse(localStorage.boardgames)
      );
      console.log(this.boardgames);
    }
  }

  getAllBoardgames() {
    this.boardgameService.getAllGames().subscribe((res) => {
      this.boardgames = res;
      window.localStorage.setItem('boardgames', JSON.stringify(res));
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
