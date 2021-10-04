import { Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-delete-dialog',
  template: `
    <h1>Delete post</h1>
    <mat-dialog-content>
      <h3>Are you sure?</h3>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button color="warn" (click)="save()">Yes</button>
      <button mat-button (click)="dismiss()">No</button>
    </mat-dialog-actions>
  `,
  styles: [
  ]
})
export class DeleteDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteDialogComponent>,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  save(){
    this.dialogRef.close(true)
  }

  dismiss(){
    this.dialogRef.close(false);
  }

}
