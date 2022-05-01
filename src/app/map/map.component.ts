import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Output() dataToSibling = new EventEmitter<any> ();
  marker = {position: {lat: 59.436962, lng: 24.753574}}

  zoom = 12
  options: google.maps.MapOptions = {
    center: {lat: 59.436962, lng: 24.753574},
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    minZoom: 1,
    maxZoom: 20,
    disableDoubleClickZoom: true,
  }


  constructor() {
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.options.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      this.marker.position = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    })
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom!) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom!) this.zoom--
  }

  click(event: google.maps.MapMouseEvent) {
    let data = {lat: event.latLng?.lat(), lon: event.latLng?.lng()}
    this.marker.position = {
      lat: (data.lat) ? data.lat : 0,
      lng: (data.lon) ? data.lon : 0
    }

    this.dataToSibling.emit(data)
  }
}
