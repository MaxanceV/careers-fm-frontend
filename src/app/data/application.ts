export interface Application {
    id: string;                 // UUID
    jobId: string;             // UUID du job associé
    firstName: string;
    lastName: string;
    phone?: string;
    email: string;
    createdDate?: Date;         
  }
  