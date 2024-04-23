import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsuranceService } from 'src/app/Services/insurance.service';
import { Insurance } from 'src/app/Models/Insurance';

@Component({
  selector: 'app-add-ins',
  templateUrl: './add-ins.component.html',
  styleUrls: ['./add-ins.component.css']
})
export class AddInsComponent implements OnInit {

  insForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private insService: InsuranceService,private router: Router) {
   
   }

  ngOnInit(): void {
    this.insForm =this.formBuilder.group({
      ceiling: ['', Validators.required],
      event_ass: ['', Validators.required],
      exclusions: ['', Validators.required],
      conditions: ['', Validators.required],
      description: [''],
      typeAss: ['', Validators.required],
      name: ['', Validators.required]

    });
  }
  addIns() : void {
    if (this.insForm.valid) {
      let insData = this.insForm.value;
      this.insService.addIns(insData).subscribe(
        response => {
          console.log('Insurance created with success:', response);
          this.insForm.reset();
        },
        error => {
          console.error('ERROR:', error);
        }
      );
    } else {
      console.error('Form invalid');
    }
}
  

}
