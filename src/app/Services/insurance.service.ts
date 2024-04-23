import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Insurance } from '../Models/Insurance';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {


  private baseUrl = 'http://localhost:8089/ins'

  constructor(private httpClient : HttpClient) { }
  

  getIns(): Observable<Insurance[]> {
    return this.httpClient.get<Insurance[]>(`${this.baseUrl}/getall`);
  }

  addIns(ins: Insurance): Observable<Insurance> {
  return this.httpClient.post<Insurance>(`${this.baseUrl}/save`,ins);
  }

  getInsbyId(id: number): Observable<Insurance> {
    return this.httpClient.get<Insurance>(`${this.baseUrl}/get/${id}`);
  }

  modifyIns(ins: Insurance): Observable<Insurance> {
    return this.httpClient.put<Insurance>(`${this.baseUrl}/update`, ins);
  }

}
