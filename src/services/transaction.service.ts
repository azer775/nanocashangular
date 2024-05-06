import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/models/Transaction';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseURL: String='http://localhost:8088/amine/transaction/'

  constructor(private http:HttpClient) { }
 // findAll(){
//return this.http.get(this.baseUrl+'getAll')
    //}
    findAllTransactions(): Observable<Transaction[]> {
      return this.http.get<Transaction[]>(this.baseURL+"getAll");
 }
 addTrans(trans: Transaction): Observable<Transaction> {
  return this.http.post<Transaction>(`${this.baseURL}saveTrans`,trans);
  }
getTransbyId(id_trans: number): Observable<Transaction> {
  return this.http.get<Transaction>(`${this.baseURL}getTrans/${id_trans}`);
}

modifyTrans(trans: Transaction): Observable<Transaction> {
  return this.http.put<Transaction>(`${this.baseURL}updateTrans`,trans);
}

removeTrans(id_trans: number): Observable<any> {
    return this.http.delete(`${this.baseURL}deleteTrans/${id_trans}`);
  }
  genererTableauTransactions(): Observable<any> {
    return this.http.get<any>(this.baseURL + "generer-tableau-transactions");
}
 // uploadTransFromExcel(formData: FormData): Observable<any> {
  //  return this.http.post(`${this.baseURL}/upload`, formData);
//}
  
}
