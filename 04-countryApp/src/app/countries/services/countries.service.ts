import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, count, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private url = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(this.url)
      .pipe(catchError(() => of([])));
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.url}/alpha/${code}`;

    return this.httpClient.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null)),
    );
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.url}/capital/${term}`;
    return this.getCountriesRequest(url);
  }

  searchCountry(country: string): Observable<Country[]> {
    const url = `${this.url}/name/${country}`;
    return this.getCountriesRequest(url);
  }

  searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.url}/region/${region}`;
    return this.getCountriesRequest(url);
  }
}
