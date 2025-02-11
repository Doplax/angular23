import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SideBarComponent } from './components/sideBar/sideBar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SideBarComponent,
    SearchBoxComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    SideBarComponent,
    SearchBoxComponent,
  ],
})
export class SharedModule {}
