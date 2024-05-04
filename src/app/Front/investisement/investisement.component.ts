import { Component, OnInit } from '@angular/core';
import { Investisement } from 'src/app/Models/Investisement';
import { InvestisementService } from 'src/app/Services/investementservice/investementservice';




@Component({
  selector: 'app-investments',
  templateUrl: './investisement.component.html',
  styleUrls: ['./investisement.component.css']
})
export class InvestmentComponent implements OnInit {
  investisements: Investisement[] = [];

  constructor(private investmentService: InvestisementService) { }

  ngOnInit(): void {
    this.loadInvestments();
  }

  loadInvestments(): void {
    this.investmentService.findAllInvestisements().subscribe((investments: Investisement[]) => {
      this.investisements = investments;
      console.log(investments)
    });
  }
  sendMail(projectName: string): void {
    const content: string = `Investment in ${projectName} is confirmed. Message: Your investment is confirmed.`;
    this.investmentService.sendMail(content).subscribe(() => {
      console.log("Mail sent");
    });
  }
}


