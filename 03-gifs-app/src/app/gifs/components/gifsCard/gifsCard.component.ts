import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifsCard.component.html',
  styleUrls: ['./gifsCard.component.css'],
})
export class GifsCardComponent implements OnInit{
  @Input() gif!: Gif;


  ngOnInit(): void { // Validamos que la propiedad gif no sea nula
    if (!this.gif) {
      throw new Error('Gif property is required');
    }
  }
}


