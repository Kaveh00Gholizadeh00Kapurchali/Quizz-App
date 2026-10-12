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
      console.log('true');
    }else{
      console.log('false');
    }
  }
}
