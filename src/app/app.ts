import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Quizz } from './quizz/quizz';
@Component({
  imports: [RouterOutlet, Quizz],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Quizz-App');
}
