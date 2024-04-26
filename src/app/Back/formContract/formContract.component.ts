import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contract, TypeContract } from '../../Models/Contract';
import { Router } from '@angular/router';
import { ContractService } from 'src/app/Services/contractService/contract.service';

@Component({
  selector: 'app-formContract',
  templateUrl: './formContract.component.html',
  styleUrls: ['./formContract.component.css']
})
export class FormContractComponent implements OnInit {
  contractForm: FormGroup;
  typeContractOptions: any[]; // Define an array to hold enum values for select options

  constructor(private formBuilder: FormBuilder, private contractService: ContractService, private router: Router) {
    this.contractForm = this.formBuilder.group({
      nompartner: ['', Validators.required],
      duartion: ['', Validators.required],
      Amount: ['', Validators.required],
      description: [''],
      typeContract: ['', Validators.required], // Assuming typeContract is required, adjust validators as needed
      date: [''] // You can include this if you want to capture the date
    });

    // Populate typeContractOptions array with enum values for select options
    this.typeContractOptions = Object.keys(TypeContract).map(key => ({
      value: (TypeContract as any)[key],
      label: key
    }));
    
  }

  ngOnInit(): void {
    // Initialize component properties or perform other initialization tasks if needed
  }

  addContract(): void {
    if (this.contractForm.valid) {
      const newContract: Contract = this.contractForm.value as Contract;
      this.contractService.addContract(newContract).subscribe(() => {
        // Handle success, e.g., show a success message
        console.log('Contract added successfully!');
        // Navigate to Contracts page
        this.router.navigateByUrl('/admin/Contracts');
      }, error => {
        // Handle error, e.g., show an error message
        console.error('Error adding contract:', error);
      });
    }
  }
}
