import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private fb:FormBuilder) {
    this.myForm = this.fb.group({
      name: [''],
      price: [0],
      inStorage: [0],
    });
  }

  onSave():void {
    console.log(this.myForm.value);
  }
}
