import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ApplicationService } from './services/application.service';
import { JobService } from './services/job.service';
import { JobListComponent } from './components/job-list/job-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobListItemComponent } from './components/job-list-item/job-list-item.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { AdvancedFilterComponent } from './components/advanced-filter/advanced-filter.component';
import { AddOfferComponent } from './components/add-offer/add-offer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { QuillModule } from 'ngx-quill';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { ApplicationListItemComponent } from './components/application-list-item/application-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    JobListComponent,
    JobListItemComponent,
    ApplicationListComponent,
    ApplicationListItemComponent,
    SearchBarComponent,
    JobDetailComponent,
    AdvancedFilterComponent,
    AddOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    QuillModule.forRoot(),
    SafeHtmlPipe
  ],
  providers: [
    provideHttpClient(),
    ApplicationService,
    JobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
