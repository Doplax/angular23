import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-full-scren-page',
  standalone: false,
  templateUrl: './full-scren-page.component.html',
  styleUrl: './full-scren-page.component.scss'
})
export class FullScrenPageComponent implements AfterViewInit{

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {

    if(!this.divMap) { throw new Error('Map container not found');}

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [2.15, 41.5], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
  }

}
