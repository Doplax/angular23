import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-markers-page',
  standalone: false,
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.scss'
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(2.15, 41.5);


  ngAfterViewInit(): void {

    if(!this.divMap) { throw new Error('Map container not found');}

     this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: this.zoom
    });

    const MarkerHtml = document.createElement('div');
    MarkerHtml.innerHTML = 'Hola Mundo';

    const marker = new Marker({
      color: 'red',
      element: MarkerHtml,
      //draggable: true
    })
      .setLngLat(this.currentLngLat)
      .addTo(this.map);
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  createMarker(){
    if (!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map?.getCenter();

    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: LngLat, color: string){
    if (!this.map) return;

    const marker = new Marker({
      color: color,
      draggable: true
    })
    .setLngLat(lngLat)
    .addTo(this.map);
  }
}
