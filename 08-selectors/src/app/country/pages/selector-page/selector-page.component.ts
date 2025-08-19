import { Component, type OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/country.interfaces';

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
    private countriesService: CountriesService
  ) {
    this.myForm = this.fb.group({
      region: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  ngOnInit(): void {
    this.onRegionChanged();
  }

  private onRegionChanged(): void {
    this.myForm.get('region')!.valueChanges
      .subscribe((region) => {
        console.log(region);
      });
  }
}
