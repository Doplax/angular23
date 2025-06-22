import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './registerPage.component.html',
  styleUrl: './registerPage.component.css',
  standalone: false,
})
export class RegisterPageComponent {

  public myForm:FormGroup


  constructor(
    private fb: FormBuilder
  ){
    this.myForm = this.fb.group({
      name: ['', [ Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern )  ]],
      // email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern )], [ new EmailValidator() ]],
      email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern )], [ this.emailValidator ]],
      username: ['', [ Validators.required, this.validatorsService.cantBeStrider ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]],
      password2: ['', [ Validators.required ]],
    }, {
      validators: [
        this.validatorsService.isFieldOneEqualFieldTwo('password','password2')
      ]
    });
  }

  isValidField(field: string): boolean {

  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
 }
