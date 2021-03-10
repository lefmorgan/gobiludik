import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardgameRouting } from './boardgame.routing';
import { BoardgameListComponent } from './boardgame-list/boardgame-list.component';
import { BoardgameDetailComponent } from './boardgame-detail/boardgame-detail.component';
import { RouterModule } from '@angular/router';
import { BoardgameContainerComponent } from './boardgame-container.component';

@NgModule({
  declarations: [
    BoardgameContainerComponent,
    BoardgameListComponent,
    BoardgameDetailComponent,
  ],
  imports: [CommonModule, RouterModule, BoardgameRouting],
})
export class BoardgameModule {}
