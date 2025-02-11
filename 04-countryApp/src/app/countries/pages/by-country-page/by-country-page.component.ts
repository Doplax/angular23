import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
  standalone: false,
})
export class ByCountryPageComponent {
    public countries: Country[] = [];

    constructor(private countriesServices: CountriesService) {}

    searchCountry($event: any): void {
      this.countriesServices
        .searchCountry($event)
        .subscribe((countries) => (this.countries = countries));
    }

}
