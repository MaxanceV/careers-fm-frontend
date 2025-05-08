import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { JobService } from '../../services/job.service';
import { Job } from '../../data/job';

@Component({
  selector: 'app-add-offer',
  standalone: false,
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent {

  /** reference lists used in the template */
  readonly levels = ['junior', 'mid', 'senior', 'lead'];
  readonly types  = ['full_time', 'part_time', 'freelance', 'internship', 'contract'];

  /** reactive form instance (initialised in the ctor) */
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private router: Router
  ) {

    /* ✅ create the form AFTER fb is injected */
    this.form = this.fb.nonNullable.group({
      title:        ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      company:      ['', [Validators.required, Validators.minLength(3)]],
      description:  ['', [Validators.required, Validators.minLength(50), Validators.maxLength(3000)]],
      salaryMin:    [0,   [Validators.required, Validators.min(0)]],
      salaryMax:    [0,   [Validators.required, Validators.min(0)]],
      location:     ['',  Validators.required],
      remote:       [false],
      experienceLevel: ['', Validators.required],
      type:            ['', Validators.required]
    });
  }

  /** convenience accessor for template */
  ctrl(name: string) { return this.form.get(name); }

  submit(): void {
    if (this.form.invalid) {
      Swal.fire('Invalid form', 'Please fix validation errors.', 'error');
      return;
    }

    /* form.value is now non-nullable → cast is safe */
    const body = this.form.value as unknown as Partial<Job>;

    this.jobService.createJob(body).subscribe({
      next: job => {
        Swal.fire('Success', 'Job created!', 'success')
            .then(() => this.router.navigate(['/jobs', job.id]));
      },
      error: () =>
        Swal.fire('Server error', 'Could not create job.', 'error')
    });
  }
}
