import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonus-game',
  templateUrl: './bonus-game.component.html',
  styleUrls: ['./bonus-game.component.scss']
})
export class BonusGameComponent {

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
    this.houseChoice = Math.floor(Math.random() * 5);
    this.board[1] = this.houseChoice;
    console.log('Computer choice', this.houseChoice)
  }

  public getStyle(b: number): string {
    if (b === 0) {
      return `rock-bonus`;
    }
    else if (b === 1) {
      return `paper-bonus`;
    }
    else if (b === 2) {
      return `scissors-bonus`;
    }
    else if (b === 3) {
      return `lizard-bonus`;
    }
    else {
      return `spock-bonus`;
    }
  }

  public confrontation(a: number, b: number): void {
    //-----------------------------------CONDITIONS TO DRAW------------------------------------------//
    if (a === b) {
      this.results = 'IT IS A DRAW';
      console.log('IT IS A DRAW')
    }
    //-----------------------------------CONDITIONS IF PLAYER PICKS ROCK-----------------------------//
    else if ((a === 0 && b === 1) || (a === 0 && b === 4)) {
      console.log('PLAYER LOST')
      this.results = 'PLAYER LOST';
      this.totalScore--
    }
    else if ((a === 0 && b === 2) || (a === 0 && b === 3)) {
      console.log('PLAYER WON')
      this.results = 'PLAYER WON';
      this.totalScore++
    }
    //-----------------------------------CONDITIONS IF PLAYER PICKS PAPER-----------------------------//
    else if ((a === 1 && b === 0) || (a === 1 && b === 4)) {
      console.log('PLAYER WON')
      this.results = 'PLAYER WON';
      this.totalScore++
    }
    else if ((a === 1 && b === 2) || (a === 1 && b === 3)) {
      console.log('PLAYER LOST')
      this.results = 'PLAYER LOST';
      this.totalScore--
    }
    //-----------------------------------CONDITIONS IF PLAYER PICKS SCISSORS-----------------------------//
    else if ((a === 2 && b === 0) || (a === 2 && b === 4)) {
      console.log('PLAYER LOST')
      this.results = 'PLAYER LOST';
      this.totalScore--
    }
    else if ((a === 2 && b === 1) || (a === 2 && b === 3)) {
      console.log('PLAYER WON')
      this.results = 'PLAYER WON';
      this.totalScore++
    }
    //-----------------------------------CONDITIONS IF PLAYER PICKS LIZARD-----------------------------//
    else if ((a === 3 && b === 0) || (a === 3 && b === 2)) {
      console.log('PLAYER LOST')
      this.results = 'PLAYER LOST';
      this.totalScore--
    }
    else if ((a === 3 && b === 1) || (a === 3 && b === 4)) {
      console.log('PLAYER WON')
      this.results = 'PLAYER WON';
      this.totalScore++
    }
    //-----------------------------------CONDITIONS IF PLAYER PICKS SPOCK-----------------------------//
    else if ((a === 4 && b === 1) || (a === 4 && b === 3)) {
      console.log('PLAYER LOST')
      this.results = 'PLAYER LOST';
      this.totalScore--
    }
    else if ((a === 4 && b === 0) || (a === 4 && b === 2)) {
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
