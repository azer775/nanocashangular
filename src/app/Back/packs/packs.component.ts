import { Component, OnInit } from '@angular/core';
import { Pack } from '../../Models/Pack';
import { PackService } from '../../Services/pack.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.css']
})
export class PacksComponent implements OnInit{
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


}
