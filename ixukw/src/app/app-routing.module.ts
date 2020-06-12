import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageDetailsComponent } from './main-page-details/main-page-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {path:'', component: MainPageDetailsComponent },
  {path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
