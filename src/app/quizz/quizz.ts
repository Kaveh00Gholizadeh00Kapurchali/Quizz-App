import { IfStmt } from '@angular/compiler';
import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-quizz',
  styleUrl: './quizz.css',
  templateUrl: './quizz.html',
})
export class Quizz {

  questions = [
    {
      questionText: 'angular is developed by?' ,
      options: ['google', 'facebook', 'microsoft'] ,
      answer: 'google',
    },
    {
      questionText: 'what is the capital of Iran?' ,
      options: ['Tehran', 'Shiraz', 'Tabriz'] ,
      answer: 'Tehran',
    },
    {
      questionText: 'Siganl replace with?' ,
      options: ['Rxjs', 'HTML', 'Css'] ,
      answer: 'Rxjs',
    },
  ];

  currentIndex = signal(0);
  score = signal(0);
  finished = signal(false)

  currentQuestion(){
    return this.questions[this.currentIndex()];
  }

  answer(option:string){
    if(option === this.currentQuestion().answer)
    {
      this.score.update(v => v+1);
      
    }

    if(this.currentIndex() < this.questions.length - 1){
      this.currentIndex.update(i => i + 1) ;
    }else{
      this.finished.set(true);
    }
  }

  Restart(){
    this.currentIndex.set(0);
    this.score.set(0);
    this.finished.set(false);
  }
}
