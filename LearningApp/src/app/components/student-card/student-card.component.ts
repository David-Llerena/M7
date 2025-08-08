import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';

@Component({
  selector: 'student-card',
  standalone: true,
  imports: [],
  templateUrl: './student-card.component.html'
})
export class StudentCardComponent {
  @Input() student!: Student;
  @Input() color: string = 'primary';
}
