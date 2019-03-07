import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // ${zipCode}
  
  city = 'Norcross';
  ApiURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`;
  constructor(private http: HttpClient) { }
  //
  // getZipCode() {
  //   return this.http.get;
  // }
  getZipCode() {
    return this.http.get(this.ApiURL);
  }
}
