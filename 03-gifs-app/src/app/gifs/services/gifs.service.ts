import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from 'src/app/gifs/interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root' // This service will be available in the root of the application
})
export class GifsService {

  public gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'Gjhu4nEldEiWIHcyAGV9VpqTt2mqPWYg'
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  constructor(private httpClient: HttpClient) {
    this.loadLocalStorage();

    console.log("Gifs service initialized");
   }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('tagsHistory', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    const tags = localStorage.getItem('tagsHistory');

    if (tags) { this._tagsHistory = JSON.parse(tags);}

    if (this._tagsHistory.length === 0)  return;
    this.searchTag(this.tagsHistory[0])
  }

  searchTag(tag: string): void  {
    if (tag.length === 0) { return;}
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.httpClient.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((response) => {
        this.gifsList = response.data;
        console.log({gifs: this.gifsList})
      })
  }

}
