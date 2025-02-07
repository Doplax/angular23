import { Component, Input } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'app-card-list',
  templateUrl: './cardList.component.html',
  styleUrls: ['./cardList.component.css'],
})
export class CardListComponent {
  @Input() gifs: Gif[] = [];
}
