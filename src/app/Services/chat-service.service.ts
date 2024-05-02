import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatUrl = 'http://localhost:8080/llama/chat1'; // URL de votre endpoint Spring Boot

  constructor(private http: HttpClient) { }

  askQuestion(question: string): Observable<string> {
    return this.http.post<string>(this.chatUrl, question);
  }
}
