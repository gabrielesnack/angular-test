import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lantern-avatar-dialog',
  template: ``,
  styleUrls: []
})
export class LanternAvatarDialogComponent {
  @Output() onChangeAvatar = new EventEmitter<number>();
  @Output() refOpenDialog = this.openDialog;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LanternAvatarDialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.onChangeAvatar.emit(result);
      }
    });
  }

}

@Component({
  selector: 'lantern-avatar-dialog-content',
  templateUrl: './lantern-avatar-dialog.component.html',
  styleUrls: ['./lantern-avatar-dialog.component.scss']
})
export class LanternAvatarDialogContentComponent {

  avatars = Array(16)

  constructor(
    public dialogRef: MatDialogRef<LanternAvatarDialogContentComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleSelected(id: number) {
    this.dialogRef.close(id);
  }
}