import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-confirm-dialog',
  standalone: false,
  templateUrl: './confirmDialog.component.html',
  styleUrls: ['./confirmDialog.component.css'],
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>, // Esto es una *referencia al diálogo actual*
    @Inject(MAT_DIALOG_DATA) public data: Hero // inyecta la data que le pasaremos al abrir el diálogo.
  ) {
    //console.log(data); // esto es para ver la data que le pasamos al abrir el diálogo
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
 }
