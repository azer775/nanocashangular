import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Loan } from 'src/app/Models/Loan';
import { Pack } from 'src/app/Models/Pack';
import { role, status, User } from 'src/app/Models/Userazer';
import { LoanService } from 'src/app/Services/loan.service';

@Component({
  selector: 'app-formloan',
  templateUrl: './formloan.component.html',
  styleUrls: ['./formloan.component.css']
})
export class FormloanComponent implements OnInit {
  loanForm: FormGroup;
  selectedPack: Pack = {
    id: 1,
    bankstat: false,
    cin: false,
    diplomat: false,
    possession: false,
    interest: 5.5,
    max: 10000,
    min: 5000,
    work: true,
    target: "Home Improvement",
    description: "Pack for home improvement loans",
    name: "Home Improvement Pack"
  }; 
   user: User = {
     Id: 1,
     firstname: "John",
     lastname: "Doe",
     dateOfBirth: new Date("1990-01-01"),
     email: "john.doe@example.com",
     pwd: "password123",
     adress: "123 Main Street",
     region: "Some Region",
     work: "Some Work",
     role: role.Admin,
     status: status.Actif
   };// Add a property for the selected pack

  constructor(private formBuilder: FormBuilder, private loanService: LoanService) {
    this.loanForm = this.formBuilder.group({
      amount: [''],
      duration: [''],
      start: [''],
      cin: [''],
      possession: [''],
      diplomat: [''],
      work: [''],
      bankstat: [''],
      state: ['']
      
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.loanForm.valid) {
      const loanData = this.loanForm.value as Loan;
      loanData.pack=this.selectedPack as Pack;
      this.user.Id=1;
      loanData.user = this.user as User;
      // You can now send loanData to your backend service for processing
      /*this.loanService.addLoan(loanData).subscribe(
        response => {
          // Handle successful response from the backend
          console.log('Loan added successfully:', response);
        },
        error => {
          // Handle errors from the backend
          console.error('Error adding loan:', error);
        }
      );*/ this.loanService.addLoan(loanData).subscribe(()=>{});
    } else {
      // Form is invalid, handle validation errors or display message to user
      console.error('Loan form is invalid');
    }
  }
}
