import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: `
    :host {
      display: block;
    }
    img {
      width: 25px;
      height: 25px;
    }
  `,
  standalone: false,
})
export class CountryTableComponent {
  @Input() countries: Country[] = [];



}
