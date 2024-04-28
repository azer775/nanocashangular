import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StatsData } from '../Models/StatsData.interface';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  private baseURL: string ="http://localhost:8080/recoveries/";

  constructor(private http:HttpClient) { }
  getdata(): Observable<any> {
    return this.http.get<StatsData>(this.baseURL+"stat");
}
}
