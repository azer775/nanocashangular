import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../Models/Loan';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private baseURL: string ="http://localhost:8080/loan/";

  constructor(private http:HttpClient) {

   }

   findAllLoans(): Observable<Loan[]> {
        return this.http.get<Loan[]>(this.baseURL+"all");
   }
   addLoan(loan: Loan): Observable<any> {
    return this.http.post<Loan>(this.baseURL+"save", loan);
  }
  addLoan1(loan: Loan, files: { [key: string]: File }): Observable<Loan> {
    const formData = new FormData();
    formData.append('loanData', JSON.stringify(loan));

    // Add selected files to FormData
    for (const key in files) {
      if (files[key]) {
        formData.append(key, files[key]);
      }
    }

    const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });

    return this.http.post<any>(this.baseURL + 'save1', formData/*, { headers }*/);
  }
  uploadLoanAndFiles(loan: Loan, files: FormData): Observable<any> {
    const formData: FormData = new FormData();
  
    // Append loan object
    for (const [key, value] of Object.entries(loan)) {
      formData.append(key, value.toString());
    }
  
    // Append files
    files.forEach((file: any, key: any) => {
      formData.append(key, file, file.name);
    });
  
    return this.http.post<any>('http://localhost:8080/loan/upload', formData);
  }
  updateLoan(loan: Loan): Observable<any> {
    return this.http.put<Loan>(this.baseURL+"up", loan);
  }

  deleteLoan(id: number): Observable<any> {
    return this.http.delete<any>(this.baseURL+"delete/"+id);
  }

  getLoanById(id: number): Observable<any> {
    return this.http.get<Loan>(this.baseURL+"byid/"+id)
  }

  generateAmortizationTable(montantEmprunte: number, tauxInteretAnnuel: number, dureeMois: number): Observable<any> {
    return this.http.get<any>(this.baseURL+"generer-tableau-amortissement/"+montantEmprunte+"/"+tauxInteretAnnuel+"/"+dureeMois);
  }

  generateAmortizationTable1(montantEmprunte: number, tauxInteretAnnuel: number, dureeMois: number): Observable<any> {
    return this.http.get<any>(this.baseURL+"generer-tableau-amortissement1/"+montantEmprunte+"/"+tauxInteretAnnuel+"/"+dureeMois);
  }
 
}
