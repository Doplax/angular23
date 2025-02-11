import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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
  @Output() onValue = new EventEmitter<string>();
  //@ViewChild('txtSearchInput') txtSearchInput: any;

  onValueEmiter(value:string): void {
    this.onValue.emit(value);
  }
 }
