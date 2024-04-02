import { Component } from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgStyle
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  problems: { operand1: number, operand2: number, operator: string, userAnswer: number, correctAnswer: number, message: string }[] = [];

  constructor() {
    this.generateProblems();
  }

  generateProblems(): void {
    this.problems = [];
    for (let i = 0; i < 4; i++) {
      const operand1 = Math.floor(Math.random() * 10);
      const operand2 = Math.floor(Math.random() * 10);
      const operators = ['+', '-', '*'];
      const operator = operators[Math.floor(Math.random() * operators.length)];
      const correctAnswer = eval(`${operand1} ${operator} ${operand2}`);

      this.problems.push({
        operand1,
        operand2,
        operator,
        userAnswer: 0,
        correctAnswer,
        message: ''
      });
    }
  }

  checkAnswers(): void {
    this.problems.forEach(problem => {
      if (problem.userAnswer === problem.correctAnswer) {
        problem.message = 'Correct answer';
      } else {
        problem.message = 'Incorrect answer';
      }
    });
  }

  generateAndReset(): void {
    this.generateProblems();
  }
}

