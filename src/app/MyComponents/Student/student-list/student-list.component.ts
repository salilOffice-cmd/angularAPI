import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Course } from '../DTOs/getCourse';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  courseList: Course[] = []
  
  constructor(private http: HttpClient){
  }

  getKeys(obj: Course): string[]{
    return Object.keys(obj);
  }


  fetchData(){
    this.courseList = [];
    
    this.http.get('https://localhost:7246/api/Course/getAll').subscribe((response:any) => {
      // Handle the response data here

      let gotCourseDtoList:Course[] = response;
      this.courseList = gotCourseDtoList;
    });
  }

  addCourse(_courseName:string){
    var newCourse = {
      'courseName' : _courseName
    }

    this.http.post('https://localhost:7246/api/Course/Add', newCourse).subscribe((response:any) => {
      console.log(response);
    })
  }


  sortCourse(sortBy: string){
    this.courseList = [];

    this.http.get(`https://localhost:7246/api/Course/sort/${sortBy}`).subscribe((response:any) => {
      let gotCourseDtoList:Course[] = response;

      this.courseList = gotCourseDtoList;
    })
  }

  

}
