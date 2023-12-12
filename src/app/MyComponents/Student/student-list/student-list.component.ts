import { CourseAPIService } from './../../../Services/course-api.service';
import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Course } from '../../../DTOs/getCourse';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  gotAllCourses: Course[] = [];
  
  constructor(private courseAPIService: CourseAPIService){
  }

  getKeys(obj: Course): string[]{
    return Object.keys(obj);
  }

  callFetchData(){
    this.courseAPIService.fetchDataAsync().subscribe(response => {
      this.courseAPIService.setDataArray(response);
      this.gotAllCourses = this.courseAPIService.courseList;
    })
  }
  
  // callFetchData(){
  //   this.courseAPIService.fetchData();
  //   this.gotAllCourses = this.courseAPIService.courseList;
  // }

  callAddCourse(_courseName: string){
    this.courseAPIService.addCourse(_courseName);
  }


  callSortCourse(sortBy: string){
    this.courseAPIService.sortCourse(sortBy);
    this.gotAllCourses = this.courseAPIService.courseList;
  }
  

  callDeleteCourse(_courseID: number){
    this.courseAPIService.deleteCourse(_courseID);
    this.callFetchData();
  }

  

}
