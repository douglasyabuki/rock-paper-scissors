import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-bonus-rules-dialog',
  templateUrl: './bonus-rules-dialog.component.html',
  styleUrls: ['./bonus-rules-dialog.component.scss']
})
export class BonusRulesDialogComponent{

  constructor(public dialogRef: MatDialogRef<BonusRulesDialogComponent>) { }

  ngOnInit(): void {
  }
  closeBonusDialog(): void {
    this.dialogRef.close();
  }

}
