import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
    public regions: Country[] = [];

    constructor(private countriesServices: CountriesService) {}

    searchByRegion($event: any): void {
      this.countriesServices
        .searchByRegion($event)
        .subscribe((regions) => (this.regions = regions));
    }

}
