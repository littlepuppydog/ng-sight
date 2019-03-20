import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_DATA: any[] = [
  {data: [65, 59, 80, 81, 56, 54], label: 'Sentiment Analysis'},
  {data: [35, 48, 90, 70, 32, 57], label: 'Image Recognition'},
  {data: [52, 34, 49, 53, 68, 62], label: 'Forecasting'},
];

const SAMPLE_LINECHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_DATA;
  lineChartLabels = SAMPLE_LINECHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend: true;
  lineChartColors = LINE_CHART_COLORS;
  lineChartType = 'line'

  ngOnInit() {
  }

}
