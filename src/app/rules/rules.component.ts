import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RulesDialogComponent } from './rules-dialog/rules-dialog.component';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  openDialog(): void {

      const dialogRef = this.dialog.open(RulesDialogComponent, {
        width: '375px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }


