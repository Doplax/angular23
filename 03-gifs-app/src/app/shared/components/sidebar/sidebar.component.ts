import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  //Usamos el getter para acceder a la propiedad privada
  // _tagsHistory sin unsar el servicio en la vista
  get tagsHistory(): string[] {
    return [...this.gifsService.tagsHistory];
  }

  searchTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}
