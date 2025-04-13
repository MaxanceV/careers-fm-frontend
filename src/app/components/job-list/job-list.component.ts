import { Component, OnInit } from '@angular/core';
import { Job } from '../../data/job';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-list',
  standalone: false,
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  constructor(private jobService: JobService) { }
  
  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }


}
