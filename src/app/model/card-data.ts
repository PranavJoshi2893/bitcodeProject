export interface CardData {
    bitcodeAdvatagesCard?: Advantage[];
    jobOrientedCourseCard?: Course[];
}

export interface Advantage {
    img: string;
    description: string;
}
  
interface Course {
    course: string;
    img: string;
}
