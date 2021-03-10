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
      'https://api.boardgameatlas.com/api/search?client_id=JLBr5npPhV';
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
          currentGame.playtime =
            games.min_playtime + ' - ' + games.max_playtime;
          currentGame.images = games.image_url;

          data.push(currentGame);
        });
        return data;
      })
    );
  }
}
