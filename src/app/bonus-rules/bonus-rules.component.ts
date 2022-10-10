import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BonusRulesDialogComponent } from './bonus-rules-dialog/bonus-rules-dialog.component';

@Component({
  selector: 'app-bonus-rules',
  templateUrl: './bonus-rules.component.html',
  styleUrls: ['./bonus-rules.component.scss']
})
export class BonusRulesComponent{

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openBonusDialog(): void {
    const dialogRef = this.dialog.open(BonusRulesDialogComponent, {
      width: '375px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
