import { Skill } from "./skill";
import { WorkExperience } from "./work-experience";

export interface Application {
    id: string;                 
    jobId: string;      
    firstName: string;
    lastName: string;
    phone?: string;
    email: string;
    createdAt: string | Date; 
    skills?: Skill[];         
    workExperiences?: WorkExperience[]; 
  }
  