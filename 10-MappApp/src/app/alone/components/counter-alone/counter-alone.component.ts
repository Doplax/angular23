import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'counter-alone',
  templateUrl: './counter-alone.component.html',
  styleUrl: './counter-alone.component.scss',
  standalone: true
})
export class CounterAloneComponent {
  @Input()
  public counter = 0;

  @Output()
  public counterChange = new EventEmitter<number>();

  public increment(number: number) {
    this.counter++;
    this.counterChange.emit(this.counter);
  }
}
