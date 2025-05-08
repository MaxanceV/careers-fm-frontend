import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../data/job';
import { Application } from '../data/application';

@Injectable()
export class JobService {
  private apiUrl = 'http://localhost:2121/api/v1/jobs';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJobById(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

  createJob(body: Partial<Job>): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, body);
  }
  
  
}
