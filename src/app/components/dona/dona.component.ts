import { Component, Input, OnInit } from '@angular/core';

import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent implements OnInit{

  @Input()
  titulo: string = 'Sin titulo';
  @Input('labels')
  doughnutChartLabels: string[] = ['Label1', 'Label2','Label3'];
  @Input()
  datas: number[]=[];

  // Doughnut
  //public doughnutChartLabels: string[] = [];//[ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
    public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
         { data: [ 30,30,30 ],
           backgroundColor: ['#6857E6','#009FEE','#F02059'] },
       ];

  ngOnInit(): void {
    // Aca seteamos los valores que vienen como @Input() al objeto doughnutChartData
    this.doughnutChartDatasets = [
      { data: this.datas}
    ];
  }



}
