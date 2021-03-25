import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PlayContainerComponent } from './play-container.component';
import { TheWriterClickerComponent } from './play-games/the-writer-clicker/the-writer-clicker.component';
import { MatIconModule } from '@angular/material/icon';

const PLAY_ROUTES: Route[] = [
  {
    path: '',
    component: PlayContainerComponent,
  },
  {
    path: 'writer',
    component: TheWriterClickerComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(PLAY_ROUTES), MatIconModule],
  declarations: [PlayContainerComponent, TheWriterClickerComponent],
})
export class PlayRoutingModule {}
