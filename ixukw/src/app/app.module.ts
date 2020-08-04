import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageDetailsComponent } from './main-page-details/main-page-details.component';
import { ProjectsComponent } from './projects/projects.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    MainPageDetailsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
