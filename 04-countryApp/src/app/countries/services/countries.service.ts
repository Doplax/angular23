import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, count, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private url = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.url}/capital/${term}`;
    return this.httpClient
      .get<Country[]>(url)
      .pipe(catchError(() => of([])));
  }
}
