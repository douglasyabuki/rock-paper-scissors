import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BonusGameComponent } from './bonus-game/bonus-game.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { RulesDialogComponent } from './rules/rules-dialog/rules-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BonusRulesComponent } from './bonus-rules/bonus-rules.component';
import { BonusRulesDialogComponent } from './bonus-rules/bonus-rules-dialog/bonus-rules-dialog.component';
import { BoardButtonComponent } from './board-button/board-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BonusGameComponent,
    GameComponent,
    HomeComponent,
    RulesComponent,
    RulesDialogComponent,
    BonusRulesComponent,
    BonusRulesDialogComponent,
    BoardButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
