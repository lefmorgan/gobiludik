import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Subscription } from 'rxjs';
import { GameService } from './shared/game.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-the-writer-clicker',
  templateUrl: './the-writer-clicker.component.html',
  styleUrls: ['./the-writer-clicker.component.scss'],
  animations: [
    trigger('pupTrig', [
      transition(':enter', [
        animate(
          '3s',
          style({ transform: 'translate(-200px, -384px)', opacity: '0' })
        ),
      ]),
    ]),
  ],
})
export class TheWriterClickerComponent implements OnInit {
  show: boolean = true;

  toggle(evt): void {
    this.show = !this.show;
  }
  open = true;
  time = 0;
  timeSub: Subscription[] = [];
  date = new Date();
  username: string = JSON.parse(localStorage.user).username;
  progress = 0;
  @ViewChild('mashinPup') mashinPup: ElementRef;
  constructor(private gameServ: GameService, private renderer: Renderer2) {
    registerLocaleData(localeFr, 'fr');
    this.timeSub.push(
      this.gameServ.time$.subscribe((time) => {
        this.time = time;
        this.date.setDate(this.date.getDate() + 1);
      })
    );
  }

  ngOnInit(): void {}

  onMashing() {
    this.progress += 0.5;
    let mashingChance = 4;
    let add = Math.floor(Math.random() * mashingChance) + (mashingChance - 2);
    if (add == mashingChance) {
      console.log('bob');
      let stat = Math.floor(Math.random() * 4); // nombre entre 0et 3
      const divPup: HTMLDivElement = this.renderer.createElement('div');
      const topPixup = this.renderer.createElement('div');
      const botPixup = this.renderer.createElement('div');
      this.renderer.addClass(divPup, 'cadre');
      this.renderer.addClass(divPup, 'pup');
      this.renderer.addClass(topPixup, 'pixels_top');
      this.renderer.addClass(botPixup, 'pixels_bottom');
      this.renderer.setProperty(divPup, '@pupTrig', 'true');
      divPup.innerHTML = 'PUP';
      this.renderer.appendChild(this.mashinPup.nativeElement, divPup);
      this.renderer.appendChild(divPup, topPixup);
      this.renderer.appendChild(divPup, botPixup);
      setTimeout(function () {
        divPup.remove();
      }, 3000);
    } else {
    }
  }

  ngOnDestroy(): void {
    this.timeSub.map((subscription) => subscription.unsubscribe());
  }
}
