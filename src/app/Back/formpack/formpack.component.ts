import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PackService } from '../../Services/pack.service';
import { Pack } from '../../Models/Pack';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formpack',
  templateUrl: './formpack.component.html',
  styleUrls: ['./formpack.component.css']
})
export class FormpackComponent implements OnInit {
  packForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private packService: PackService,private router: Router) {
    this.packForm =formBuilder.group({
      id: [''], // You may or may not include this depending on your use case
      bankstat: [false],
      cin: [false],
      diploma: [false],
      possession: [false],
      interest: ['', Validators.required],
      max: ['', Validators.required],
      min: ['', Validators.required],
      work: [false],
      target: ['', Validators.required],
      description: [''],
      name: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addPack() : void {
    if (this.packForm.valid) {
        const pack : Pack = this.packForm.value as Pack;
        this.packService.addPack(pack).subscribe(()=>{
          
        })
        this.router.navigateByUrl('/admin/packs');    
  }
  
}
  

}
