import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './components/cardList/cardList.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { GifsCardComponent } from './components/gifsCard/gifsCard.component';
import { HomePageComponent } from './pages/home/home-page.component';

@NgModule({
  declarations: [
    CardListComponent,
    SearchBoxComponent,
    GifsCardComponent,
    HomePageComponent,
  ],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
