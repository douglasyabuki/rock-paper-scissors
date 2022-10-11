import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonus-game',
  templateUrl: './bonus-game.component.html',
  styleUrls: ['./bonus-game.component.scss']
})
export class BonusGameComponent {

  public totalScore: number;
  public currentScore: number;
  private playerChoice: number;
  private houseChoice: number;
  public board: number[];
  public results: string;
  public stage: number;

  constructor() {
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
    this.houseChoice = Math.floor(Math.random() * (7 - 3 + 1)) + 3;;
    this.board[1] = this.houseChoice;
    console.log('Computer choice', this.houseChoice)
  }

  public confrontation(a: number, b: number): void {
    //-----------------------------------CONDITIONS TO DRAW------------------------------------------//
    if (a === b) {
      this.results = 'IT IS A DRAW';
      console.log('IT IS A DRAW')
    }
    //-----------------------------------CONDITIONS IF PLAYER PICKS ROCK-----------------------------//
    else if ((a === 3 && b === 4) || (a === 3 && b === 7)) {
      console.log('PLAYER LOST')
      this.results = 'PLAYER LOST';
      this.totalScore--
    }
    else if ((a === 3 && b === 5) || (a === 3 && b === 3)) {
      console.log('PLAYER WON')
      this.results = 'PLAYER WON';
      this.totalScore++
    }
    //-----------------------------------CONDITIONS IF PLAYER PICKS PAPER-----------------------------//
    else if ((a === 4 && b === 3) || (a === 4 && b === 7)) {
      console.log('PLAYER WON')
      this.results = 'PLAYER WON';
      this.totalScore++
    }
    else if ((a === 4 && b === 5) || (a === 4 && b === 6)) {
      console.log('PLAYER LOST')
      this.results = 'PLAYER LOST';
      this.totalScore--
    }
    //-----------------------------------CONDITIONS IF PLAYER PICKS SCISSORS-----------------------------//
    else if ((a === 5 && b === 3) || (a === 5 && b === 7)) {
      console.log('PLAYER LOST')
      this.results = 'PLAYER LOST';
      this.totalScore--
    }
    else if ((a === 5 && b === 4) || (a === 5 && b === 6)) {
      console.log('PLAYER WON')
      this.results = 'PLAYER WON';
      this.totalScore++
    }
    //-----------------------------------CONDITIONS IF PLAYER PICKS LIZARD-----------------------------//
    else if ((a === 6 && b === 3) || (a === 6 && b === 5)) {
      console.log('PLAYER LOST')
      this.results = 'PLAYER LOST';
      this.totalScore--
    }
    else if ((a === 6 && b === 4) || (a === 6 && b === 7)) {
      console.log('PLAYER WON')
      this.results = 'PLAYER WON';
      this.totalScore++
    }
    //-----------------------------------CONDITIONS IF PLAYER PICKS SPOCK-----------------------------//
    else if ((a === 7 && b === 4) || (a === 7 && b === 6)) {
      console.log('PLAYER LOST')
      this.results = 'PLAYER LOST';
      this.totalScore--
    }
    else if ((a === 7 && b === 3) || (a === 7 && b === 5)) {
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
