export class Boardgame {
  public id?: string;
  public name = '';
  public rank = 0;
  public description?: string;
  public min_players?: number;
  public max_player?: string;
  public complexity = 0;
  public min_playtime?: number;
  public max_playtime?: number;
  public price?: number;
  public year_published?: number;
  public images?: string;

  constructor(object: Boardgame | {} = {}) {
    Object.assign(this, object);
  }
}
