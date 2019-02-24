import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'chartdemo';

  // Pie
  public pieChartLabels:string[] = ['Critical', 'Not Critical'];
  public pieChartData:number[] = [60, 40];
  public pieChartType:string = 'pie';
 
  // colors
  public pieChartColor:Array<any> = [
    { backgroundColor: ["#FF0000", "#008000"] },
    { borderColor: ["#AEEBF2", "#FEFFC9"] }
 ]

//  height
  

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
