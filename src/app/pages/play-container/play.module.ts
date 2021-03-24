import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayRoutingModule } from './play.routing';
import { RouterModule } from '@angular/router';
import { PlayContainerComponent } from './play-container.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TheWriterClickerComponent } from './play-games/the-writer-clicker/the-writer-clicker.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    PlayRoutingModule,
    MatTableModule,
    MatFormFieldModule,
  ],
})
export class PlayModule {}
