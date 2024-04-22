import { Component } from '@angular/core';
import { Pack } from '../../Models/Pack';
import { PackService } from '../../Services/pack.service';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.css']
})
export class PacksComponent {
packs: Pack[] = [];


ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.loadPacks();
}
constructor(private packService: PackService) {
    
}
loadPacks(): void {
this.packService.findAllPacks().subscribe( (Packs :Pack[]) =>{
  this.packs =Packs
});
}


}
