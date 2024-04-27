import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/Models/Loan';
import { LoanService } from 'src/app/Services/loan.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit{
  loans: Loan[] = [];
  
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadLoans();
  }
  constructor(private loanService: LoanService,private router: Router) {
      
  }
  loadLoans(): void {
  this.loanService.findAllLoans().subscribe( (Loans :Loan[]) =>{
    this.loans =Loans
  });
  }
  navigateToForm(id: number): void {
    this.router.navigate(['/admin/addpack', { Data: JSON.stringify(id) }]);
  }
  
  
  }
