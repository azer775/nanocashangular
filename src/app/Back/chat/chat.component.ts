import { Component } from '@angular/core';
import { ChatService } from 'src/app/Services/chat-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  questionsAndAnswers: { question: string, response: string }[] = [];
  currentQuestion: string = '';

  constructor(private chatService: ChatService) { }

  askQuestion() {
    this.chatService.askQuestion(this.currentQuestion).subscribe(
      (response: any) => {
        this.questionsAndAnswers.push({ question: this.currentQuestion, response: response.response });
        this.currentQuestion = ''; // Clear the question after receiving the response
      },
      (error) => {
        console.error('Error receiving response:', error);
      }
    );
  }
  

}
