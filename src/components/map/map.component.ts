import { Component, OnInit } from '@angular/core';
import { LMapOptions, Map, tileLayer, marker } from 'leaflet'


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  map: Map;
  ngOnInit(): void {
    const mapOptions: LMapOptions = {
      center: [4.05, 39.68], // Initial coordinates of Mombasa County
      zoom: 10
    };

    this.map = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapOptions);

    marker([-4.05, 39.68]).addTo(this.map); // Marker for Mombasa city center
  }

}
