import { Component, OnInit } from '@angular/core';
import { Job } from '../../data/job';
import { JobService } from '../../services/job.service';
import { Subject, debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-job-list',
  standalone: false,
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  
  private filterSubject = new Subject<void>();
  private searchTerm: string = '';
  private advancedFilters: any = {
    salaryMin: null,
    remote: null,
    type: '',
    experienceLevel: ''
  };

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
  this.filterSubject.pipe(
    debounceTime(300),
    switchMap(() => {
      const filters = {
        keyword: this.searchTerm,
        salaryMin: this.advancedFilters.salaryMin, 
        remote: this.advancedFilters.remote,
        type: this.advancedFilters.type,
        experienceLevel: this.advancedFilters.experienceLevel 
      };
      console.log('Filters sent to service:', filters); 
      return this.jobService.getJobsWithFilters(filters);
    })
  ).subscribe(jobs => {
    this.jobs = jobs.map(job => {
      let createdAt: Date;

      if (Array.isArray(job.createdAt)) {
        const [y, m, d, h = 0, min = 0] = job.createdAt;
        createdAt = new Date(y, m - 1, d, h, min);
      } else {
        createdAt = new Date(job.createdAt ?? '');
      }

      return { ...job, createdAt };
    });
  });
  this.loadJobs();
}

  loadJobs(): void {
    this.filterSubject.next();
  }

  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filterSubject.next();
  }

  applyFilters(filters: any): void {
    this.advancedFilters = filters;
    this.filterSubject.next();
  }
}