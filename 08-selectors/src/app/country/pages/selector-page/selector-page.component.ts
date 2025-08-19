import { Component, type OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  standalone: false,
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css'],
})
export class SelectorPageComponent implements OnInit {

  public myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.myForm = this.fb.group({
      region: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
    });

  }

  ngOnInit(): void { }
}
