import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Contract } from 'src/app/Models/Contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private baseURL: string ="http://localhost:8082/";

  constructor(private http:HttpClient) {

   }

   findAllContracts(): Observable<Contract[]> {
        return this.http.get<Contract[]>(this.baseURL+"Contract/all");
   }

   addContract(Contract: Contract): Observable<Contract> {
      return this.http.post<Contract>(this.baseURL+"Contract/save",Contract);
   }
}
