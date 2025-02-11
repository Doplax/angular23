import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SideBarComponent } from './components/sideBar/sideBar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { FormsModule } from '@angular/forms';
import { CountryTableComponent } from '../countries/components/country-table/country-table.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SideBarComponent,
    SearchBoxComponent,
    CountryTableComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    SideBarComponent,
    SearchBoxComponent,
    CountryTableComponent
  ],
})
export class SharedModule {}
