import { Component, type OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { combineLatest, filter, Observable, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  standalone: false,
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css'],
})
export class SelectorPageComponent implements OnInit {

  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];
  public myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {
    this.myForm = this.fb.group({
      region: ['', Validators.required],
      country: ['', Validators.required],
      border: ['', Validators.required],
    });
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  ngOnInit(): void {
    this.onRegionChanged();
  }

 onRegionChanged(): void {
    this.myForm.get('region')!.valueChanges
      .pipe(
        tap(() => this.myForm.get('country')!.setValue('')),
        tap(() => this.borders = []),
        switchMap(region => this.countriesService.getCountriesByRegion(region))
      )
      .subscribe(countries => {
        this.countriesByRegion = countries
      });
  }

  onCountryChanged(): void {
    this.myForm.get('country')!.valueChanges
    .pipe(
      tap(() => this.myForm.get('country')!.setValue('')),
      filter((alphaCode:string) => alphaCode.length > 0),
      switchMap(alphaCode => this.countriesService.getCountryByAlphaCode(alphaCode)),
      switchMap(country =>  this.countriesService.getCountryBordersByCodes(country.borders))

    ).subscribe(countries => {
      this.borders = countries;
    })
  }
}
