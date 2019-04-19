import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartType } from 'chart.js';
import {MultiDataSet, Label, BaseChartDirective  } from 'ng2-charts';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styles: []
})
export class GraficodonaComponent implements OnInit {

  @ViewChild("baseChart")
    chart: BaseChartDirective;

  
  @Input() chartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() chartData: MultiDataSet = [[350, 450, 100]];
  @Input() chartType: ChartType = 'doughnut';

  

  constructor() { 

    if(this.chart !== undefined){
      this.chart.ngOnDestroy();
      this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
}

  

  }

  ngOnInit() {
  }

}
