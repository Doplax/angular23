import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    GifsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
