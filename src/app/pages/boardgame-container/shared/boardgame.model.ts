export class Boardgame {
  public id?: string;
  public name = '';
  public rank = 0;
  public description?: string;
  public min_players?: number;
  public max_player?: string;
  public complexity = 0;
  public playtime?: string;
  public images?: string;

  constructor(object: Boardgame | {} = {}) {
    Object.assign(this, object);
  }
}
