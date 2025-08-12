import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/service/validators.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './registerPage.component.html',
  styleUrl: './registerPage.component.css',
  standalone: false,
})
export class RegisterPageComponent {

  public myForm:FormGroup


  constructor(
    private validatorsService: ValidatorsService,
    private fb: FormBuilder
  ){
    this.myForm = this.fb.group({
      name: ['', [ Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern )  ]],
      email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern )]],
      username: ['', [ Validators.required, this.validatorsService.cantBeStrider ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]],
      password2: ['', [ Validators.required ]],
    }, {
      //validators: [
      //  this.validatorsService.isFieldOneEqualFieldTwo('password','password2')
      //]
    });
  }

  isValidField(field: string) {
    this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
 }
