export interface Job {
  id: string;
  title: string;
  description: string;
  location?: string;
  remote: boolean;
  company: string;
  type: string;
  salaryMin?: number;
  salaryMax?: number;
  experienceLevel: string;
  createdAt?: string | Date;
}
