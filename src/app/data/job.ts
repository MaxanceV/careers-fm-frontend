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
  createdDate?: Date;         
}

export const FAKE_JOBS: Job[] = [
    {
      id: '1',
      title: 'Senior Software Developer',
      description: 'Lead the development team and implement scalable web applications.',
      location: 'Paris',
      remote: true,
      company: 'Tech Innovators Inc.',
      type: 'full_time',
      salaryMin: 70000,
      salaryMax: 90000,
      experienceLevel: 'senior',
      createdDate: new Date('2024-01-15')
    },
    {
      id: '2',
      title: 'Junior Web Developer',
      description: 'Assist in building responsive web applications and learn from senior developers.',
      location: 'Lyon',
      remote: false,
      company: 'StartUp Hub',
      type: 'internship',
      salaryMin: 30000,
      salaryMax: 40000,
      experienceLevel: 'junior',
      createdDate: new Date('2024-02-01')
    },
    {
      id: '3',
      title: 'Freelance Graphic Designer',
      description: 'Create creative designs and marketing materials for digital campaigns.',
      location: 'Remote',
      remote: true,
      company: 'Creative Studio',
      type: 'freelance',
      salaryMin: 40000,
      salaryMax: 50000,
      experienceLevel: 'mid',
      createdDate: new Date('2024-03-10')
    },
    {
      id: '4',
      title: 'Project Manager',
      description: 'Manage projects from conception to delivery while coordinating across teams.',
      location: 'Bordeaux',
      remote: false,
      company: 'Enterprise Solutions',
      type: 'full_time',
      salaryMin: 50000,
      salaryMax: 75000,
      experienceLevel: 'senior',
      createdDate: new Date('2024-02-20')
    },
    {
      id: '5',
      title: 'Part Time Content Writer',
      description: 'Produce engaging and high-quality written content.',
      location: 'Marseille',
      remote: true,
      company: 'Digital Creatives Ltd.',
      type: 'part_time',
      salaryMin: 35000,
      salaryMax: 45000,
      experienceLevel: 'mid',
      createdDate: new Date('2024-03-05')
    }
  ];