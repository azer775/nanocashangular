import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contract, TypeContract } from '../../Models/Contract';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/Services/contractService/contract.service';

@Component({
  selector: 'app-edit-contract',
  templateUrl: './editContract.component.html',
  styleUrls: ['./editContract.component.css']
})
export class EditContractComponent implements OnInit {
  contractForm: FormGroup;
  typeContractOptions: any[]; // Define an array to hold enum values for select options
  contractId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private contractService: ContractService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contractForm = this.formBuilder.group({
      nompartner: ['', Validators.required],
      duartion: ['', Validators.required],
      amount: ['', Validators.required],
      description: [''],
      typeContract: ['', Validators.required],
      date: ['']
    });

    // Populate typeContractOptions array with enum values for select options
    this.typeContractOptions = Object.keys(TypeContract).map(key => ({
      value: (TypeContract as any)[key],
      label: key
    }));
  }

  ngOnInit(): void {
    // Retrieve the contract ID from the route parameters
    this.route.params.subscribe(params => {
      this.contractId = params['id'];
      // Load the contract details based on the contract ID
      this.loadContractDetails(this.contractId);
    });
  }

  loadContractDetails(contractId: number): void {
    // Call your contract service to fetch contract details by ID
    this.contractService.getbyid(contractId).subscribe(contract => {
      // Populate the form with the fetched contract details
      this.contractForm.patchValue(contract);
    });
  }

  updateContract(): void {
    if (this.contractForm.valid) {
      const updatedContract: Contract = this.contractForm.value as Contract;
      updatedContract.idContratct = this.contractId;
      this.contractService.editContract(updatedContract).subscribe(() => {
        console.log('Contract updated successfully!');
        // Navigate to Contracts page or any other desired location
        this.router.navigateByUrl('/admin/contract');
      }, error => {
        console.error('Error updating contract:', error);
      });
    }
  }
}
