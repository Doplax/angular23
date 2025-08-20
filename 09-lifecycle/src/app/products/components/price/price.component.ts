import { Component, Input, OnChanges, OnDestroy, SimpleChanges, type OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  standalone: false,
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input() price: number = 0;
  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('PriceComponent ngOnInit');
    interval(1000).subscribe(() => {
      console.log(`PriceComponent interval: ${this.interval$}`);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('PriceComponent ngOnChanges');
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log('PriceComponent ngOnDestroy');
    this.interval$?.unsubscribe();
  }
}
