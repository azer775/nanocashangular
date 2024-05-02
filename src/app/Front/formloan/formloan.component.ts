import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Loan } from 'src/app/Models/Loan';
import { Pack } from 'src/app/Models/Pack';
import { role, status, User } from 'src/app/Models/Userazer';
import { LoanService } from 'src/app/Services/loan.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-formloan',
  templateUrl: './formloan.component.html',
  styleUrls: ['./formloan.component.css']
})
export class FormloanComponent implements OnInit {
  loanForm: FormGroup;
  selectedFiles: { [key: string]: File } = {};
  files: FormData = new FormData();
  selectedPack: Pack = {
    id: 1,
    bankstat: false,
    cin: true,
    diploma: false,
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

  constructor(private formBuilder: FormBuilder,private http: HttpClient, private loanService: LoanService) {
    this.loanForm = this.formBuilder.group({
      amount: [''],
      duration: [''],
      start: [''],
      cin: [''],
     // possession: [''],
      //diplomat: [''],
      work: [''],
      //bankstat: [''],
      state: ['']
      
    });
  }

  ngOnInit(): void {
  }
  onFileSelected(event: any, key: string) {
    if (event.target.files.length > 0) {
      const files: any = this.files;
      files.append(key, event.target.files[0]);
    }
  }
  onSubmit() {
    if (this.loanForm.valid) {
      const loanData = this.loanForm.value as Loan;
      loanData.pack=this.selectedPack as Pack;
      this.user.Id=1;
      loanData.user = this.user as User;
      const formData = new FormData();
      const loan = this.loanForm.value;

      this.loanService.uploadLoanAndFiles(loan, this.files).subscribe(
        response => {
          console.log('Files uploaded successfully', response);
          // Reset form or perform other actions as needed
          this.loanForm.reset();
        },
        error => {
          console.error('Error uploading files', error);
        }
      );

      //this.loanService.addLoan(loanData).subscribe(()=>{});
    } else {
      // Form is invalid, handle validation errors or display message to user
      console.error('Loan form is invalid');
    }
  }
}
