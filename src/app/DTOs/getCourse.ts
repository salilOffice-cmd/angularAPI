export class Course{
    public  courseId:number; 
    public  courseName:string; 
    public  createdDate:Date; 
    public  createdBy:string; 
    public  lastModifiedDate:Date; 
    public  lastModifiedBy:string; 
    public  isActive:boolean; 

    constructor(_CourseId:number,
                _CourseName:string,
                _CreatedDate:Date,
                _CreatedBy:string,
                _LastModifiedDate:Date,
                _LastModifiedBy:string,
                _IsActive:boolean)
    {
        this.courseId = _CourseId
        this.courseName = _CourseName
        this.createdDate = _CreatedDate
        this.createdBy = _CreatedBy
        this.lastModifiedDate = _LastModifiedDate
        this.lastModifiedBy = _LastModifiedBy
        this.isActive = _IsActive
    }


}

