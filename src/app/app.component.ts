import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MapComponent } from "../components/map/map.component";
import { AppModule } from './app.module';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      CommonModule,
      RouterOutlet,
      MapComponent,
      AppModule
    ]
})
export class AppComponent {
  title = 'angular-test-app';
}
