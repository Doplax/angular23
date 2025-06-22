import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``,
  standalone: false,
})
export class SwitchesPageComponent implements OnInit {
  public myForm: FormGroup;
  prueba = 'prueba';
  public person = {
    gender: 'F',
    wantNotifications: false,
  }

  constructor(
    private fb: FormBuilder,
  ){
    this.myForm = this.fb.group({
      gender: ['M', Validators.required],
      wantNotifications: [true, Validators.required],
      termsAndConditions: [true, Validators.required],
    });
  }

  ngOnInit(): void {
    this.myForm.reset(this.person)
  }


  isValidField(field: string): boolean | null {
    const control = this.myForm.get(field);
    return !!(control && control.errors && control.touched);
  }

  onSave(){
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const {termsAndConditions , ...newPerson } = this.myForm.value;

    this.person = newPerson;
    console.log(this.person);
    console.log(this.person);
  }
}
