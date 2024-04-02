import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name='Maths Practise'
  currentDate: Date = new Date();
  quote='Success is not final; failure is not fatal: It is the courage to continue that counts.'
  getCurrentDate(): string {
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    return this.currentDate.toLocaleDateString('en-US', options);
  }
}
