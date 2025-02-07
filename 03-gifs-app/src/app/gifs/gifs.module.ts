import { CardListComponent } from './components/cardList/cardList.component';
import { CommonModule } from '@angular/common';
import { GifsCardComponent } from './components/gifsCard/gifsCard.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CardListComponent,
    SearchBoxComponent,
    GifsCardComponent,
    HomePageComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
