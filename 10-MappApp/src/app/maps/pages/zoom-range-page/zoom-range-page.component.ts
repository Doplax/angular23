import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';
import { map } from 'rxjs';

@Component({
  selector: 'app-zoom-range-page',
  standalone: false,
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.scss'
})
export class ZoomRangePageComponent {

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;


  ngAfterViewInit(): void {

    if(!this.divMap) { throw new Error('Map container not found');}

     this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [2.15, 41.5],
      zoom: this.zoom
    });


    this.mapListeners();
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
