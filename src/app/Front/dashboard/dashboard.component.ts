import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit  {
  constructor(private router: Router) {}

  navigateToAddTrans(): void {
    this.router.navigate(['/addTrans']);
  }
  ngOnInit(): void {
    // Replace the iframe source URL with your Power BI report URL
    const powerBiUrl = "https://app.powerbi.com/reportEmbed?reportId=fb20625b-b442-477f-b4ab-c13172a84c9d&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730";
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.setAttribute('src', powerBiUrl);
    }
  }

}
