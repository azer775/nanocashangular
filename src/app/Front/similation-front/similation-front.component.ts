import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoanService } from 'src/app/Services/loan.service';

@Component({
  selector: 'app-similation-front',
  templateUrl: './similation-front.component.html',
  styleUrls: ['./similation-front.component.css']
})
export class SimilationFrontComponent {
  montantEmprunte!: number;
  tauxInteretAnnuel!: number;
  dureeMois!: number;

  constructor(private loanservice: LoanService) { }

  genererTableauAmortissement() {
    this.loanservice.genererTableauAmortissement(this.montantEmprunte, this.tauxInteretAnnuel, this.dureeMois)
      .subscribe((response: Blob) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'tableau_amortissement.xlsx';
        link.click();
      });
  }

}
