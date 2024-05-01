import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../Models/Loan';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private uploadUrl = 'http://localhost:8080/loan/upload2'; // URL of your Spring endpoint

  constructor(private http: HttpClient) { }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(this.uploadUrl, formData);
  }
  uploadFiles1(loan: Loan) {
    const formData = new FormData();
    // Append loan object properties
    Object.keys(loan).forEach(key => {
      if (loan[key] instanceof FileList) {
        for (let i = 0; i < loan[key].length; i++) {
          formData.append(key, loan[key][i]);
        }
      } else {
        formData.append(key, loan[key]);
      }
    });

    return this.http.post(this.uploadUrl, formData);
  }
  /*uploadFiles(loan: Loan) {
    const formData = new FormData();

    // Append loan object properties
    Object.keys(loan).forEach(key => {
      formData.append(key, loan[key]);
    });

    // Append files
    Object.keys(loan.files).forEach(key => {
      formData.append(key, loan.files[key]);
    });

    return this.http.post(this.uploadUrl, formData);
  }*/
  uploadFiles3(formData: FormData) {
    return this.http.post(this.uploadUrl, formData);
  }
}
