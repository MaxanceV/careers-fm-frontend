import { Component, Input } from '@angular/core';
import { Application } from '../../data/application';

@Component({
  selector: 'app-application-list',
  standalone: false,
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent {
  @Input() apps: Application[] | null = [];
}
