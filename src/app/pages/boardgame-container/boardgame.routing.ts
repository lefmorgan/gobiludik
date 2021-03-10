import { Route, RouterModule } from '@angular/router';
import { BoardgameContainerComponent } from './boardgame-container.component';
import { BoardgameDetailComponent } from './boardgame-detail/boardgame-detail.component';

const BOARDGAME_ROUTES: Route[] = [
  {
    path: 'boardgame',
    component: BoardgameContainerComponent,
    children: [{ path: 'index', component: BoardgameDetailComponent }],
  },
];

export const BoardgameRouting = RouterModule.forChild(BOARDGAME_ROUTES);
