import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learning',
  imports: [CommonModule],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent implements OnInit {
  course!: Course;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.course = this.courseService.getCourse();
  }
}
