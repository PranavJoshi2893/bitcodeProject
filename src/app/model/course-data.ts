interface Course {
    courseId: number;
    courseName: string;
    subCourse: SubCourse[];
}
  
interface SubCourse {
  subCourseId: number;
  subCourseName: string;
  subCourseDetails: string;
  courseContent?: string[];
}