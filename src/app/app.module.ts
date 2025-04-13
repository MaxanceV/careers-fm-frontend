import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobListItemComponent } from './components/job-list-item/job-list-item.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { ApplicationListItemComponent } from './components/application-list-item/application-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SearchBarComponent,
    JobListComponent,
    JobListItemComponent,
    JobDetailComponent,
    ApplyFormComponent,
    ApplicationListComponent,
    ApplicationListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
