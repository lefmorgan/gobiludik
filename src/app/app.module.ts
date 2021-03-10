import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { BoardgameContainerComponent } from './pages/boardgame-container/boardgame-container.component';
import { VideogameContainerComponent } from './pages/videogame-container/videogame-container.component';
import { BoardgameModule } from './pages/boardgame-container/boardgame.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    HeaderComponent,
    VideogameContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BoardgameModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
