import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // If using standalone components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule], // Import CommonModule here
})
export class AppComponent {
  isChatbotOpen = false;

  toggleChatbot() {
    this.isChatbotOpen = !this.isChatbotOpen;
  }
}
