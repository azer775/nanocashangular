import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { StatService } from 'src/app/Services/stat.service';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  months: number[] = [];
  sumWithDateRelNotNull: number[] = [];
  sumWithDateRelNull: number[] = [];
  option!: EChartsOption; 
  constructor(private statservice :StatService) { }
  ngOnInit(): void {
    this.statservice.getdata().subscribe((data:any) => {
      data.forEach((item: any) => {
        this.months.push(item[0]);
        this.sumWithDateRelNotNull.push(item[1]);
        this.sumWithDateRelNull.push(item[2]);
      });
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['Paid amount', 'Unpaid amount', ]
        },
        xAxis: {
          type: 'category',
          data: this.months
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Paid amount',
            type: 'bar',
            data: this.sumWithDateRelNotNull
          },
          {
            name: 'Unpaid amount',
            type: 'bar',
            data: this.sumWithDateRelNull
          }
        ]
      };
     
    });
    
  }
  
}
