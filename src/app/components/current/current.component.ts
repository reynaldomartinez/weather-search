import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  zipCode = 'test';
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getZipCode().subscribe(data => {
      console.log(data);
    });
  }

}
