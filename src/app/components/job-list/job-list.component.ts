import { Component, OnInit } from '@angular/core';
import { Job } from '../../data/job';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-list',
  standalone: false,
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  allJobs: Job[] = [];

  private currentSearchTerm: string = '';
  private currentFilters: any = {};

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
      this.allJobs = jobs;
    });
  }

  onSearch(searchTerm: string): void {
    this.currentSearchTerm = searchTerm;
    this.applyCombinedFilters();
  }

  applyFilters(filters: any): void {
    this.currentFilters = filters;
    this.applyCombinedFilters();
  }

  private applyCombinedFilters(): void {
    this.jobs = this.allJobs.filter((job) => {
      const matchTitle = !this.currentSearchTerm || job.title.toLowerCase().includes(this.currentSearchTerm.toLowerCase());
      const matchSalary = !this.currentFilters.salaryMin || (job.salaryMin ?? 0) >= this.currentFilters.salaryMin;
      const matchRemote = this.currentFilters.remote === null || job.remote === this.currentFilters.remote;
      const matchType = !this.currentFilters.type || job.type === this.currentFilters.type;
      const matchExperience = !this.currentFilters.experienceLevel || job.experienceLevel === this.currentFilters.experienceLevel;

      return matchTitle && matchSalary && matchRemote && matchType && matchExperience;
    });
  }
}
