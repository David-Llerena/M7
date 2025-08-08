import { Component, Input } from '@angular/core';
import { Course } from '../../model/Course';

@Component({
  selector: 'course-header',
  standalone: true,
  imports: [],
  templateUrl: './course-header.component.html'
})
export class CourseHeaderComponent {
  @Input() course!: Course;
}
