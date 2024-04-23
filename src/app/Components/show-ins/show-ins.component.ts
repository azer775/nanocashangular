import { Component } from '@angular/core';
import { Insurance } from 'src/app/Models/Insurance';
import { InsuranceService } from 'src/app/Services/insurance.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-show-ins',
  templateUrl: './show-ins.component.html',
  styleUrls: ['./show-ins.component.css']
})
export class ShowInsComponent {
  insurances: Insurance[] = [];
  filtered: Insurance[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  searchText = '';

  listIns!: Insurance[];
  constructor( private service:InsuranceService, private route :Router){}
  ngOnInit(): void {
    this.GetContracts()
  }

  GetContracts(){
    return this.service.getIns().subscribe(res=>{console.log(res);
    this.listIns=res});
  }
  
}
