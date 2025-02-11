import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  standalone: false,
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countriesServices: CountriesService) {}

  searchByCapital($event: any): void {
    this.countriesServices
      .searchByCapital($event)
      .subscribe((countries) => (this.countries = countries));
  }
}
