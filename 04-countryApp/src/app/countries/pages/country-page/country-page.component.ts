import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  standalone: false,
})
export class CountryPageComponent implements OnInit {

  public country?: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesServices: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesServices.searchCountryByAlphaCode(id)) // Nos suscribiremos al resultado de este observable
      )
      .subscribe((country) => {
        if (!country) return this.router.navigateByUrl('');

        return this.country = country;

      });
  }
}
