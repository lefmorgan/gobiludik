import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from './shared/game.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-the-writer-clicker',
  templateUrl: './the-writer-clicker.component.html',
  styleUrls: ['./the-writer-clicker.component.scss'],
})
export class TheWriterClickerComponent implements OnInit {
  time = 0;
  timeSub: Subscription[] = [];
  date = new Date();
  username: string = JSON.parse(localStorage.user).username;
  constructor(private gameServ: GameService) {
    registerLocaleData(localeFr, 'fr');
    this.timeSub.push(
      this.gameServ.time$.subscribe((time) => {
        this.time = time;
        this.date.setDate(this.date.getDate() + 1);
      })
    );
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.timeSub.map((subscription) => subscription.unsubscribe());
  }
}
