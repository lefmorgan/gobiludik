import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardgameRouting } from './boardgame.routing';
import { BoardgameListComponent } from './boardgame-list/boardgame-list.component';
import { BoardgameDetailComponent } from './boardgame-detail/boardgame-detail.component';
import { RouterModule } from '@angular/router';
import { BoardgameContainerComponent } from './boardgame-container.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    BoardgameContainerComponent,
    BoardgameListComponent,
    BoardgameDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BoardgameRouting,
    MatTableModule,
    MatFormFieldModule,
  ],
})
export class BoardgameModule {}
