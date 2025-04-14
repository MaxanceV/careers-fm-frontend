import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../../data/job';

@Component({
  selector: 'app-job-list-item',
  standalone: false,
  templateUrl: './job-list-item.component.html',
  styleUrl: './job-list-item.component.css'
})
export class JobListItemComponent {
  @Input()
  job!: Job;

  constructor(private router: Router) {}

  goToJobDetail(job: any): void {
    this.router.navigate(['/jobs', job.id]);
  }
}
