import { Component } from '@angular/core';
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
export class BasicPageComponent {
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

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched(); // 📌 Esto fuerza a Angular a mostrar los mensajes de error aunque el usuario no haya tocado los campos manualmente.
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({ price: 0, inStorage: 0 });
  }
}
