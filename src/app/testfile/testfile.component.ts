import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../Services/file-upload.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pack } from '../Models/Pack';
import { PackService } from '../Services/pack.service';
import { ActivatedRoute } from '@angular/router';
import { Loan } from '../Models/Loan';
import { LoanService } from '../Services/loan.service';

@Component({
  selector: 'app-testfile',
  templateUrl: './testfile.component.html',
  styleUrls: ['./testfile.component.css']
})
export class TestfileComponent implements OnInit {
  isEditing:boolean = false;
  updatedloan!:Loan;
  selectedPack!: Pack; /*= {
    id: 1,
    bankstat: true,
    cin: true,
    diplomat: true,
    possession: false,
    interest: 5.5,
    max: 10000,
    min: 5000,
    work: true,
    target: "Home Improvement",
    description: "Pack for home improvement loans",
    name: "Home Improvement Pack"
  }*/; 
  loanForm: FormGroup= this.fb.group({
    cin: [''],
    possession: [''],
    diploma: [''],
    work: [''],
    bankstat: [''],
    state: [''],
    amount: [''],
    duration: [''],
    start: ['']
  });;

  constructor(private fb: FormBuilder, private fileUploadService: FileUploadService,private packService: PackService,private route: ActivatedRoute,private loanservice: LoanService) {
    this.createForm();
  }
  ngOnInit(): void {
      

    this.route.params.subscribe(params => {
      if (params['Data']) {
                  this.isEditing = true;
                 // this.updatedpack$ = this.packService.getbyid(params['id']);
                  this.loanservice.getLoanById(params['Data']).subscribe((loan: Loan) => {
                    // Handle the response here, for example, you can assign the pack to a property
                    this.updatedloan = loan;
                   this.loanForm.patchValue(this.updatedloan);
                  });
                }
        this.packService.getbyid(params['idp']).subscribe((pack: Pack) => {
          // Handle the response here, for example, you can assign the pack to a property
          this.selectedPack = pack;
        });
    });
  }

  createForm() {
    this.loanForm = this.fb.group({
      cin: [''],
      possession: [''],
      diploma: [''],
      work: [''],
      bankstat: [''],
      state: [''],
      amount: [''],
      duration: [''],
      start: ['']
    });
  }

  onFileChange(event: any, field: string) {
    const files = event.target.files;
    if (files.length > 0) {
      this.loanForm.get(field)?.setValue(files);
    }
  }

  onSubmit() {
    
    const formData = new FormData();
    const loanData = this.loanForm.value;
    loanData.idp=this.selectedPack.id;
    Object.keys(loanData).forEach(key => {
      if (loanData[key] instanceof FileList) {
        for (let i = 0; i < loanData[key].length; i++) {
          formData.append(key, loanData[key][i]);
        }
      } else {
        formData.append(key, loanData[key]);
      }
    });
    if(this.isEditing){
      loanData.id=this.updatedloan.id;
      this.loanservice.updatewithFiles(formData).subscribe(
        response => {
          console.log('Files uploaded successfully:', response);
        },
        error => {
          console.error('Error uploading files:', error);
        }
      );
    }else{
    this.fileUploadService.uploadFiles3(formData).subscribe(
      response => {
        console.log('Files uploaded successfully:', response);
      },
      error => {
        console.error('Error uploading files:', error);
      }
    );}
  }

}
