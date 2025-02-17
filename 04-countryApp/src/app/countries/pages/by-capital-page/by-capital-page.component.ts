import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  standalone: false,
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initalValue: string = '';

  constructor(private countriesServices: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCapital.countries;
    this.initalValue = this.countriesServices.cacheStore.byCapital.term;
  }

  searchByCapital($event: any): void {
    this.isLoading = true;
    this.countriesServices
      .searchByCapital($event)
      .subscribe((countries) => (this.countries = countries));

    this.isLoading = false;
  }
}
