import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  standalone: false,
})
export class SearchBoxComponent {
  @Input() placeHolder = 'Search...';
 }
