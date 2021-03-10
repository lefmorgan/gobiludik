import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsConnectedGuard } from './guards/is-connected.guard';
import { IsNotConnectedGuard } from './guards/is-not-connected.guard';
import { BoardgameContainerComponent } from './pages/boardgame-container/boardgame-container.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { VideogameContainerComponent } from './pages/videogame-container/videogame-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [IsConnectedGuard],
  },
  {
    path: 'boardgame',
    component: BoardgameContainerComponent,
    canActivate: [IsConnectedGuard],
  },
  {
    path: 'videogame',
    component: VideogameContainerComponent,
    canActivate: [IsConnectedGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsNotConnectedGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
