import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { FAKE_JOBS, Job } from "../data/job";


@Injectable()
export class JobService {
  constructor(private http:HttpClient) { }

  getJobs(): Observable<Job[]> {
    return of(FAKE_JOBS);
  }
}