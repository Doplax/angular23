import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
  standalone: false,
})
export class ByCountryPageComponent implements OnInit {
    public countries: Country[] = [];
    public isLoading: boolean = false;
    public initalValue: string = '';

    constructor(private countriesServices: CountriesService) {}

    ngOnInit(): void {
      this.countries = this.countriesServices.cacheStore.byCountry.countries;
      this.initalValue = this.countriesServices.cacheStore.byCountry.term;
    }

    searchCountry($event: any): void {
      this.countriesServices
        .searchCountry($event)
        .subscribe((countries) => (this.countries = countries));
    }

}
