import { Component, Input } from '@angular/core';
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

  goToJobDetail(job: any): void {
    // Navigate to the job detail page or handle the job detail logic
    console.log('Navigating to job detail for:', job);
  }
}
