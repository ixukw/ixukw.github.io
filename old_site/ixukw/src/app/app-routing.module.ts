import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageDetailsComponent } from './main-page-details/main-page-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from "@angular/common";
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path:'', component: MainPageDetailsComponent },
  {path: 'projects', component: ProjectsComponent },
  {path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
