import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  pieChartData: number[] = [350, 450, 120];
  pieChartLabels: string[] = ['Restaurant Brands','LSG Sky Chefs','Tegel Foods'];
  colors: any[] = [
    {
      backgroundColor: ['#26547C','#ff6b6b','#ffd166'],
      borderColor: '#111'
    }
  ];
  pieChartType ='doughnut';//'doughnut','pie'

  ngOnInit() {
  }

}
