import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Project } from 'src/app/Models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseURL: string ="http://localhost:8082/spring/";

  constructor(private http:HttpClient) {

   }

   findAllProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(this.baseURL+"Project/all");
   }

   addProject(Project: Project): Observable<Project> {
      return this.http.post<Project>(this.baseURL+"Project/save",Project);
   }
   getbyid(id: number): Observable<Project> {
    return this.http.get<Project>(this.baseURL+"Project/"+id);}
    deleteProject(id: number): Observable<any> {
      return this.http.delete<any>(this.baseURL + "Project/delete/" + id)}
      exportExcel(id: number): Observable<any> {
        return this.http.get<any>(this.baseURL + "genererbilanProvissionnel/" + id)}
}
