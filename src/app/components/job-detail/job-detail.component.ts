import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Job } from '../../data/job';
import { JobService } from '../../services/job.service';
import { Application } from '../../data/application';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-job-detail',
  standalone: false,
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit {
  job!: Job;  
  applications: Application[] = [];
  showApplications = false;
  
  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private location: Location,
    private applicationService: ApplicationService
  ) { }

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    if (jobId) {
      this.jobService.getJobById(jobId).subscribe({
        next: (job: Job) => {
          this.job = job;
          this.loadApplications(job.id);
        },
        error: (err) => console.error('Error fetching job details', err)
      });
    }
  }

  loadApplications(jobId: string) {
    this.applicationService.getApplicationsByJobId(jobId).subscribe({
      next: (apps) => this.applications = apps,
      error: (err) => console.error('Error loading applications', err)
    });
  }


  back(): void {
    this.location.back();
  }
}
