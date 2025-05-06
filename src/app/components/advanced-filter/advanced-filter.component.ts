import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-advanced-filter',
  standalone: false,
  templateUrl: './advanced-filter.component.html',
  styleUrl: './advanced-filter.component.css'
})
export class AdvancedFilterComponent {
  @Output() filterChange = new EventEmitter<any>();

  filters = {
    salaryMin: null,
    remote: null,
    type: '',
    experienceLevel: ''
  };

  types = ['full_time', 'part_time', 'freelance', 'internship', 'contract'];
  levels = ['junior', 'mid', 'senior', 'lead'];

  onChange() {
    this.filterChange.emit(this.filters);
  }

  resetFilters() {
    this.filters = {
      salaryMin: null,
      remote: null,
      type: '',
      experienceLevel: ''
    };
    this.onChange();
  }
  
}
