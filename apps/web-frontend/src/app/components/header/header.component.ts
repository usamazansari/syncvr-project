import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from '..';

@Component({
  selector: 'syncvr-project-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}

  public openDialog(): void {
    this.dialog.open(DialogComponent, {});
  }
}
