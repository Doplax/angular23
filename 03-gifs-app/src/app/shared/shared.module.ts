import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { CardListComponent } from './components/cardList/cardList.component';




@NgModule({
  declarations: [
    SidebarComponent,
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    HomePageComponent
  ]
})
export class SharedModule { }
