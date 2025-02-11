import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private url = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }


  searchByCapital(term: string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.url}/capital/${term}`);
  }
}
