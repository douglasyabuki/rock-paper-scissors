import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})

export class GameComponent {
  public totalScore: number;
  public currentScore: number;
  private optionsIx: number[];
  private playerChoice: number;
  private houseChoice: number;
  public board: number[];
  public results: string;
  public stage: number;

  constructor() {
    this.optionsIx = [0, 1, 2];
    this.stage = 0;
    this.totalScore = 0;
    this.board = [0, 0];
  }

  public changeStage(): void {
    if (this.stage < 1) {
      this.stage++;
    }
    else this.stage = 0;
  }

  public async getPlayerChoice(a: number) {
    this.playerChoice = a;
    console.log('Player choice', this.playerChoice)
    this.board[0] = this.playerChoice;
    this.getHouseChoice();
    this.confrontation(this.board[0], this.board[1]);
  }

  public getHouseChoice(): void {
    this.houseChoice = Math.floor(Math.random() * 3);
    this.board[1] = this.houseChoice;
    console.log('Computer choice', this.houseChoice)
  }

  public getStyle(b: number): string{
    if (b === 0) {
      return `rock`;
    }
    else if (b === 1) {
      return `paper`;
    }
    else{
      return `scissors`;
    }
  }

  public confrontation(a: number, b: number): void {
    if (a === b) {
      this.results = 'IT IS A DRAW';
      console.log('IT IS A DRAW')
    }
    else if (a === 0 && b === 1) {
      console.log('PLAYER LOST')
      this.results = 'PLAYER LOST';
      this.totalScore--
    }
    else if (a === 0 && b === 2) {
      console.log('PLAYER WON')
      this.results = 'PLAYER WON';
      this.totalScore++
    }
    else if (a === 1 && b === 0) {
      console.log('PLAYER WON')
      this.results = 'PLAYER WON';
      this.totalScore++
    }
    else if (a === 1 && b === 2) {
      console.log('PLAYER LOST')
      this.results = 'PLAYER LOST';
      this.totalScore--
    }
    else if (a === 2 && b === 0) {
      console.log('PLAYER LOST')
      this.results = 'PLAYER LOST';
      this.totalScore--
    }
    else if (a === 2 && b === 1) {
      console.log('PLAYER WON')
      this.results = 'PLAYER WON';
      this.totalScore++
    }
  }
  public restart(): void {
    this.board = [0, 0];
    this.changeStage();
  }
}
