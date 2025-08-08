import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from '../student-card/student-card.component';

@Component({
  selector: 'students-list',
  standalone: true,
  imports: [CommonModule, StudentCardComponent],
  templateUrl: './students-list.component.html'
})
export class StudentsListComponent {
  @Input() students: Student[] = [];

  getCardColor(index: number): string {
    const colors = ['primary', 'success', 'info', 'warning'];
    return colors[index % colors.length];
  }
}
