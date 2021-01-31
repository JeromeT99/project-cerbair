import { ɵallowPreviousPlayerStylesMerge } from '@angular/animations/browser';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

import {
  chartOptions,
  parseOptions,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;

  ngOnInit() {

    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [40, 20, 40, 20, 50, 40, 40],
            backgroundColor: '#35E5E0'
        }, {
            label: 'Line Dataset',
            data: [20, 50, 30, 15, 60, 25, 35],
            type: 'bar',
            backgroundColor: '#1D61BE'
        }],
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      },
    });
  }
}
