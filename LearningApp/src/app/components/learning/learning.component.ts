import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { CourseHeaderComponent } from '../course-header/course-header.component';
import { StudentsListComponent } from '../students-list/students-list.component';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CommonModule, CourseHeaderComponent, StudentsListComponent],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent implements OnInit {
  course!: Course;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.course = this.courseService.getCourse();
  }

  // Color helper moved to StudentsListComponent
}
