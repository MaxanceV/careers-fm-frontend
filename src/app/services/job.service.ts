import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../data/job';

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
  getJobsWithFilters(filters: {
  keyword?: string,
  salaryMin?: number,
  remote?: boolean,
  type?: string,
  experienceLevel?: string
}): Observable<Job[]> {
  let params = new HttpParams();
  
  if (filters.keyword) {
    params = params.set('keyword', filters.keyword);
  }
  
  if (filters.salaryMin) {
    params = params.set('salaryMin', filters.salaryMin.toString());
  }
  
  if (filters.remote !== null && filters.remote !== undefined) {
    params = params.set('remote', filters.remote.toString());
  }
  
  if (filters.type) {
    params = params.set('type', filters.type);
  }
  
  if (filters.experienceLevel) {
    params = params.set('experienceLevel', filters.experienceLevel);
  }
  
  return this.http.get<Job[]>(`${this.apiUrl}/filter`, { params });
}
}