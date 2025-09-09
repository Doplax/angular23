import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  standalone: false,
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.scss'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {


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
    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove(); // Eliminar el mapa al destruir el componente
  }

  mapListeners(){
    if(!this.map) { throw new Error('Map not initialized');}

    this.map.on('zoom', () => {
      if(!this.map) { throw new Error('Map not initialized');}
      this.zoom = this.map.getZoom();
    });

    this.map.on('zoomend', () => {
      if(!this.map) { throw new Error('Map not initialized');}

      if(this.map.getZoom() > 18){
        this.map.zoomTo(18);
      }
    });

    this.map.on('move', ( event ) => {
      if(!this.map) { throw new Error('Map not initialized');}
      this.currentLngLat = this.map.getCenter();
      //const { lng, lat } = this.currentLngLat;
    });
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged( value : string ){
    this.zoom = Number(value);
    this.map?.zoomTo( this.zoom );
  }
}
