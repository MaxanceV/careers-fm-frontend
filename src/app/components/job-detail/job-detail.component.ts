import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Job } from '../../data/job';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-detail',
  standalone: false,
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit {
  job!: Job;  // La variable qui stockera l'offre
  
  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    if (jobId) {
      this.jobService.getJobById(jobId).subscribe({
        next: (job: Job) => this.job = job,
        error: (err) => console.error('Error fetching job details', err)
      });
    }
    
  }

  // Méthode pour revenir en arrière
  back(): void {
    this.location.back();
  }
}
