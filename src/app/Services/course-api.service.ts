import { Injectable } from '@angular/core';
import {Course} from '../DTOs/getCourse';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseAPIService {

  courseList: Course[] = []

  constructor(private http: HttpClient){

  }

  fetchDataAsync() : Observable<any>{
    return this.http.get<any>('https://localhost:7246/api/Course/getAll');
  }

  setDataArray(_response:any){
    let gotCourseDtoList:Course[] = _response;
    this.courseList = gotCourseDtoList;
  }
  

  // fetchData(){
  //   // this.courseList = [];
    
  //   this.http.get('https://localhost:7246/api/Course/getAll').subscribe((response:any) => {
  //     // Handle the response data here
  //     console.log(response);
      
  //     let gotCourseDtoList:Course[] = response;
  //     this.courseList = gotCourseDtoList;
  //   });
  // }

  addCourse(_courseName:string){
    var newCourse = {
      'courseName' : _courseName
    }

    this.http.post('https://localhost:7246/api/Course/Add', newCourse).subscribe((response:any) => {
      console.log(response);
    })
  }

  deleteCourse(_courseID: number){
    this.http.delete(`https://localhost:7246/api/Course/delete/${_courseID}`).subscribe((response:any) => {
      console.log(response);
      
      if(response.status == 200){
        alert("Course deleted successfully")
      }
    },
    (error) => {
      console.log(error);
    }
    )
  }


  sortCourse(sortBy: string){
    this.courseList = [];

    this.http.get(`https://localhost:7246/api/Course/sort/${sortBy}`).subscribe((response:any) => {
      
      let gotCourseDtoList:Course[] = response;
      this.courseList = gotCourseDtoList;
    })
  }
}
