import { AfterViewInit, Component } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

mapboxgl.accessToken = environment.mapbox_key;
@Component({
  selector: 'app-full-scren-page',
  standalone: false,
  templateUrl: './full-scren-page.component.html',
  styleUrl: './full-scren-page.component.scss'
})
export class FullScrenPageComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [2.15, 41.5], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

  }


}
