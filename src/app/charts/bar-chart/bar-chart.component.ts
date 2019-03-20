import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHAT_DATA: any[] = [
  {data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Sales'},
  {data: [35, 48, 90, 70, 32, 57, 52], label: 'Q4 Sales'}
];

const SAMPLE_BARCHAT_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHAT_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHAT_LABELS;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLegend = true;
  public barChartType = 'bar'  

  ngOnInit() {
  }

}
