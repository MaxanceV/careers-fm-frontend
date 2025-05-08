import { Skill } from "./skill";
import { WorkExperience } from "./work-experience";

export interface Application {
    id: string;                 // UUID
    jobId: string;             // UUID du job associé
    firstName: string;
    lastName: string;
    phone?: string;
    email: string;
    createdAt: string | Date; 
    skills?: Skill[];         // Liste des compétences
    workExperiences?: WorkExperience[]; // Liste des expériences professionnelles
  }
  