import { Component, Input } from '@angular/core';
import { Application } from '../../data/application';

@Component({
  selector: 'app-application-list-item',
  standalone: false,
  templateUrl: './application-list-item.component.html',
  styleUrls: ['./application-list-item.component.css']
})
export class ApplicationListItemComponent {
  @Input() app!: Application;
  expanded = false;
  toggle() { this.expanded = !this.expanded; }
}
