import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Investisement } from 'src/app/Models/Investisement';
import { Project } from 'src/app/Models/Project';

@Injectable({
  providedIn: 'root'
})
export class InvestisementService {
  private baseURL: string ="http://localhost:8082/spring/";

  constructor(private http:HttpClient) {

   }

   findAllInvestisements(): Observable<Investisement[]> {
        return this.http.get<Investisement[]>(this.baseURL+"investisement/all");
   }

   addInvestisement(Investisement: Investisement): Observable<Investisement> {
      return this.http.post<Investisement>(this.baseURL+"investisement/save",Investisement);
   }
   sendMail(content: String): Observable<Investisement> {
    return this.http.post<Investisement>(this.baseURL+"investisement/testsendattachementemail",content);
 }
   getbyid(id: number): Observable<Investisement> {
    return this.http.get<Investisement>(this.baseURL+"investement/"+id);}
    deleteInvestement(id: number): Observable<any> {
      return this.http.delete<any>(this.baseURL + "investement/delete/" + id) }
      editInvestment(investement: Investisement): Observable<Investisement> {
        return this.http.put<Investisement>(this.baseURL+"investment/up",Investisement);}

}
