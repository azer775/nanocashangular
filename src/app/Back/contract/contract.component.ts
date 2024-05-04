import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/Services/contractService/contract.service';
import { Contract } from '../../Models/Contract';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-contracts',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract[] = [];

  constructor(private contractService: ContractService ,  private router: Router) { }

  ngOnInit(): void {
    this.loadContracts();
  }

  loadContracts(): void {
    this.contractService.findAllContracts().subscribe((contracts: Contract[]) => {
      this.contracts = contracts;
    });
  }
  editContract(contract: Contract): void {
    this.router.navigate(['admin/edit-contract', contract.idContratct]);
  }
}