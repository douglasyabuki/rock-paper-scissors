import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board-button',
  templateUrl: './board-button.component.html',
  styleUrls: ['./board-button.component.scss']
})
export class BoardButtonComponent implements OnInit {
  @Input() public value
  public buttonClasses: string[];
  public buttonURLs: string[];
  public booleanURLs: boolean[];

  constructor() {
    this.buttonClasses = [
      "rock",
      "paper",
      "scissors",
      "rock-bonus",
      "paper-bonus",
      "scissors-bonus",
      "lizard-bonus",
      "spock-bonus",
      "default"
    ];
    this.buttonURLs = [
      "assets/img/icon-rock.png",
      "assets/img/icon-paper.png",
      "assets/img/icon-scissors.png",
      "assets/img/icon-rock.png",
      "assets/img/icon-paper.png",
      "assets/img/icon-scissors.png",
      "assets/img/icon-lizard.png",
      "assets/img/icon-spock.png"
    ];
    this.booleanURLs = [
      true,
      true,
      true,
      true,
      true,
      false
    ];
  }

  ngOnInit(): void {
  }
}
