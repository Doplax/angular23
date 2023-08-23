import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];


  @Output()
  public onDeleteId:EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index:number):void {
    console.log({index});
    this.onDeleteId.emit(index);

  }
}
