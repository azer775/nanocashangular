import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pack } from 'src/app/Models/Pack';
import { PackService } from 'src/app/Services/pack.service';

@Component({
  selector: 'app-packsfront',
  templateUrl: './packsfront.component.html',
  styleUrls: ['./packsfront.component.css']
})
export class PacksfrontComponent implements OnInit{
  packs: Pack[] = [];
  
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadPacks();
  }
  constructor(private packService: PackService,private router: Router) {
      
  }
  loadPacks(): void {
  this.packService.findAllPacks().subscribe( (Packs :Pack[]) =>{
    this.packs =Packs
  });
  }
  navigateToForm(id: number): void {
    this.router.navigate(['/admin/addpack', { Data: JSON.stringify(id) }]);
  }
  navigateToFormloan(id: number): void {
    this.router.navigate(['/loanadd', { idp: JSON.stringify(id) }]);
  }
  
}
