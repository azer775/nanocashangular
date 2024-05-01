import { Component } from '@angular/core';
import { FileUploadService } from '../Services/file-upload.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pack } from '../Models/Pack';

@Component({
  selector: 'app-testfile',
  templateUrl: './testfile.component.html',
  styleUrls: ['./testfile.component.css']
})
export class TestfileComponent {
  selectedPack: Pack = {
    id: 1,
    bankstat: false,
    cin: true,
    diplomat: false,
    possession: false,
    interest: 5.5,
    max: 10000,
    min: 5000,
    work: true,
    target: "Home Improvement",
    description: "Pack for home improvement loans",
    name: "Home Improvement Pack"
  }; 
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

  constructor(private fb: FormBuilder, private fileUploadService: FileUploadService) {
    this.createForm();
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

    this.fileUploadService.uploadFiles3(formData).subscribe(
      response => {
        console.log('Files uploaded successfully:', response);
      },
      error => {
        console.error('Error uploading files:', error);
      }
    );
  }

}
