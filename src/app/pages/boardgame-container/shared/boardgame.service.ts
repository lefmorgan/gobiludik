import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Boardgame } from '../shared/boardgame.model';

@Injectable({
  providedIn: 'root',
})
export class BoardgameService {
  constructor(private http: HttpClient) {}

  public getAllGames(): Observable<any> {
    const url =
      'https://api.boardgameatlas.com/api/search?limit=100&client_id=JLBr5npPhV';
    return this.http.get<any>(url).pipe(
      map((response: any) => {
        console.log(response);
        let data: Boardgame[] = [];

        response.games.forEach((games: any) => {
          let currentGame: Boardgame = new Boardgame();
          currentGame.id = games.id;
          currentGame.name = games.name;
          currentGame.rank = games.rank;
          currentGame.description = games.description;
          currentGame.min_players = games.min_players;
          currentGame.max_player = games.max_player;
          currentGame.complexity =
            games.average_learning_complexity +
            games.average_strategy_complexity;
          currentGame.price = games.price;
          currentGame.year_published = games.year_published;
          currentGame.images = games.image_url;

          data.push(currentGame);
        });
        return data;
      })
    );
  }

  getRedditBoardgame() {
    const url =
      'https://api.boardgameatlas.com/api/search?gt_reddit_week_count=4&limit=4&client_id=JLBr5npPhV';

    return this.http.get<any>(url);
  }
}
