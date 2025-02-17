import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

//Usamos Type cuando sabemos que no va a extenderse a otros valores

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
    public countries: Country[] = [];
    public regions: Region[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
    public selectedRegion?: Region;

    constructor(private countriesServices: CountriesService) {}

    ngOnInit(): void {
      this.countries = this.countriesServices.cacheStore.byRegion.countries;
      this.selectedRegion = this.countriesServices.cacheStore.byRegion.region;
    };

    searchByRegion(region: Region): void {
      this.selectedRegion = region;
      this.countriesServices
        .searchByRegion(region)
        .subscribe((countries) => (this.countries = countries));
    }
}
