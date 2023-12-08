import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';
import { MapComponent } from '../components/map/map.component';



@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    CommonModule,
    LeafletModule,
    MapComponent
  ],
  bootstrap: []
})
export class AppModule { }
