import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chart = [];
  temp_max = [];
  temp_min = [];
  alldates = [];
  constructor(private _weather: DataService) { }

  ngOnInit() {
    this._weather.dailyForecast()
      .subscribe(res => {
        this.temp_max = res['list'].map(res => res.main.temp_max)
        this.temp_min = res['list'].map(res => res.main.temp_min)
        this.alldates = res['list'].map(res => res.dt)

        let weatherDates = []
        this.alldates.forEach((res) => {
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('fi', {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric'}))
        })

          this.chart = new Chart('canvas', {
            type: 'line',
            data: {
              label: weatherDates,
              datasets: [
                {
                  data: this.temp_max,
                  borderColor: '#3cba0f',
                  fill: false
                },
                {
                  data: this.temp_min,
                  borderColor: '#ffcc00',
                  fill: false
                },
              ]
            },
            options: {
              legend: {
                display: true
              },
              scales: {
                xAxes: [{
                  display: true
                }],
                yAxes: [{
                  disply: true
                }]
              }
            }
          } );
      } );
    }
  }
