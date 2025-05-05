import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: false,
})
export class CardComponent implements OnInit {
  @Input() public hero!: Hero;


  constructor() {}

  ngOnInit(): void {
    if (!this.hero) {
      throw new Error('Hero input is required');
    }
  }
}
