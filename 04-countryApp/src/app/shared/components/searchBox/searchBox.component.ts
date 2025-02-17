import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

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
export class SearchBoxComponent implements OnInit {
  @Input() placeHolder = 'Search...';
  @Output() onValue = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();

  private debouncer = new Subject<string>();

  //@ViewChild('txtSearchInput') txtSearchInput: any;

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(1000) // Espera 1 segundo antes de continuar
    )
    .subscribe((term: string) => {
        this.onDebounce.emit(term);
      });
  }

  onValueEmiter(value:string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm); // Para hacer la siguiente emisión del observable
  }
 }
