import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pack } from '../Models/Pack';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PackService {
  private baseURL: string ="http://localhost:8080/";

  constructor(private http:HttpClient) {

   }

   findAllPacks(): Observable<Pack[]> {
        return this.http.get<Pack[]>(this.baseURL+"pack/all");
   }

   addPack(pack: Pack): Observable<Pack> {
      return this.http.post<Pack>(this.baseURL+"pack/save",pack);
   }
}
