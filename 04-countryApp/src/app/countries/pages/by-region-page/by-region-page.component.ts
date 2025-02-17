import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

//Usamos Type cuando sabemos que no va a extenderse a otros valores
type Region = 'africa' | 'americas' | 'asia' | 'europe' | 'oceania';

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
    public countries: Country[] = [];
    public regions: Region[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
    public selectedRegion?: Region;

    constructor(private countriesServices: CountriesService) {}

    searchByRegion(region: Region): void {
      this.selectedRegion = region;
      this.countriesServices
        .searchByRegion(region)
        .subscribe((countries) => (this.countries = countries));
    }
}
