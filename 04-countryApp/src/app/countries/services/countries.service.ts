import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, count, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore, TermCountries } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private url = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    const cache = localStorage.getItem('cache');
    if (cache) {
      this.cacheStore = JSON.parse(cache);
    }
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(this.url)
      .pipe(catchError(() => of([])));
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.url}/alpha/${code}`;

    return this.httpClient.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.url}/capital/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byCapital = { term, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchCountry(country: string): Observable<Country[]> {
    const url = `${this.url}/name/${country}`;
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCountry = { term: country, countries })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchByRegion(region: Region): Observable<Country[]> {
    const url = `${this.url}/region/${region}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byRegion = { region, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }
}
