import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherdata?:WeatherData;

  constructor( private weatherService:WeatherApiService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherData('london').subscribe({
      next:(res) => {
        this.weatherdata = res;
        console.log(res);
      } 
    });
  }

 
}
