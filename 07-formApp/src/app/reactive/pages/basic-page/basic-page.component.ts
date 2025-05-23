import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 999,
  inStorage: 100,
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``,
  standalone: false,
})
export class BasicPageComponent implements OnInit {
  //public myForm: FormGroup = new FormGroup({
  //  name: new FormGroup(''),
  //  price: new FormGroup(0),
  //  inStorage: new FormGroup(0),
  //});

  public myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      inStorage: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    //this.myForm.reset(rtx5090);
  }

  isValidField( field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  getFieldError( field: string): string | null {
    if (!this.myForm.controls[field]) return null

    const errors = this.myForm.controls[field].errors || {};

    for (const key in Object.keys(errors)) {
      switch (key) {
        case 'required':
          return `El campo ${field} es requerido`;
        case 'minlength':
          return `El campo ${field} debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `El campo ${field} debe ser mayor a 0`;
      }
    }

    return ''
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched(); // 📌 Esto fuerza a Angular a mostrar los mensajes de error aunque el usuario no haya tocado los campos manualmente.
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({ price: 0, inStorage: 0 });
  }
}
