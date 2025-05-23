import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``,
  standalone: false,
})
export class DynamicPageComponent {

  public myForm: FormGroup;
  public myFormGames: FormGroup;

  constructor(
    private fb: FormBuilder,
  ){
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      favoriteGames: this.fb.array([])
    });

    this.myFormGames = this.fb.group({
      favoriteGames: this.fb.array([
        ['Metal Gear Solid', [Validators.required]],
        ['Final Fantasy VII', [Validators.required]],
        ['The Legend of Zelda: Ocarina of Time', [Validators.required]],
        ['Super Mario 64', [Validators.required]],
      ])
    });
  }

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }


  onSumbit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
