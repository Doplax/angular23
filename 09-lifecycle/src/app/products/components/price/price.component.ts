import { Component, Input, OnChanges, OnDestroy, SimpleChanges, type OnInit } from '@angular/core';

@Component({
  selector: 'products-price',
  standalone: false,
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input() price: number = 0;

  
  ngOnInit(): void {
    console.log('PriceComponent ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('PriceComponent ngOnChanges');
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log('PriceComponent ngOnDestroy');
  }



}
