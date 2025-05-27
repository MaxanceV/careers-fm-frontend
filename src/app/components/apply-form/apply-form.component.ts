// components/apply-form/apply-form.component.ts
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import {
  AbstractControl, ValidationErrors, 
  FormArray, FormBuilder, FormGroup, Validators
} from '@angular/forms';
import Swal from 'sweetalert2';
import { ApplicationService }       from '../../services/application.service';

function dateRange(control: AbstractControl): ValidationErrors|null {
  const start = control.get('startDate')?.value;
  const end   = control.get('endDate')?.value;
  if (start && end && new Date(start) > new Date(end)) {
    return { dateRange: true };
  }
  return null;
}

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls : ['./apply-form.component.css'],
  standalone: false
})
export class ApplyFormComponent implements OnInit {

  form!: FormGroup;
  jobId!: string;

  get skills()           { return this.form.get('skills') as FormArray; }
  get experiences()      { return this.form.get('workExperiences') as FormArray; }

  constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private appSvc: ApplicationService) {}

      ngOnInit(): void {
        this.jobId = this.route.snapshot.paramMap.get('id')!;
    
        this.form = this.fb.group({
          firstName: ['', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50)
          ]],
          lastName : ['', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50)
          ]],
          email    : ['', [ Validators.required, Validators.email ]],
          phone    : ['', [
            Validators.required,
            Validators.pattern(/^[0-9+\-\s]{5,20}$/)
          ]],
    
          // at least one skill, each ≥2 chars
          skills   : this.fb.array([
            this.fb.control('', [Validators.required, Validators.minLength(2)])
          ]),
    
          // experiences (optional) – validator on the group
          workExperiences: this.fb.array([])
        });
      }

  // Add / remove helpers
  addSkill() {
    this.skills.push(
      this.fb.control('', [Validators.required, Validators.minLength(2)])
    );
  }
  removeSkill(i: number) { this.skills.removeAt(i); }

  addExperience() {
    this.experiences.push(
      this.fb.group({
        title      : ['', [Validators.required, Validators.minLength(2)]],
        description: [''],
        startDate  : ['', Validators.required],
        endDate    : ['']
      }, { validators: dateRange })             //  ← custom validator
    );
  }
  removeExperience(i: number) { this.experiences.removeAt(i); }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    const payload = {
      jobId : this.jobId,
      ...this.form.value
    };

    this.appSvc.createApplication(payload).subscribe({
      next : () => {
        Swal.fire({icon:'success', title:'Application sent!'})
            .then(() => this.router.navigate(['/jobs', this.jobId]));
      },
      error: () => Swal.fire({icon:'error', title:'Something went wrong'})
    });
  }
}
