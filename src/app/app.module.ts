import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationService } from './services/application.service';
import { JobService } from './services/job.service';
import { JobListComponent } from './components/job-list/job-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    JobListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(),
    ApplicationService,
    JobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
