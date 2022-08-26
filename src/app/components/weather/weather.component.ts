import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cityName:string = 'chennai'
  weatherdata?:WeatherData;

  constructor( private weatherService:WeatherApiService) { }

  ngOnInit(): void {
    this.getWeather(this.cityName);
  }

  private getWeather(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe({
    next:(res) => {
      this.weatherdata = res;
      console.log(res);
    } 
  });

  }

  onSubmit(){
    this.getWeather(this.cityName);
    this.cityName = '';
  }
 
}
