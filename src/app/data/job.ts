export type JobType = 'full-time' | 'part-time' | 'freelance' | 'internship' | 'contract';
export type ExperienceLevel = 'junior' | 'mid' | 'senior' | 'lead';

export interface Job {
  id: string;        
  title: string;
  description: string;
  location?: string;      
  remote: boolean;
  company: string;
  type: JobType;
  salary_min?: number;
  salary_max?: number;
  experience_level: ExperienceLevel;
  created_at?: Date;         
}
