import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get('http://api.openweathermap.org/data/2.5/forecast?q=Lappeenranta,fi&APPID=52087b841a0e19eae02720bc08ef0b5b')
      .map(result => result);
  }

}
