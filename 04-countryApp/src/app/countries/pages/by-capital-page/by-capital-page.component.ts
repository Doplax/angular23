import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  standalone: false,
})
export class ByCapitalPageComponent {


  searchByCapital( $event:any): void {
    console.log({$event});
    //console.log('searchByCapital', value);
  }
 }
