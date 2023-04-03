import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetProjectComponent } from './Projects/get-project/get-project.component';
import { GetProjectsComponent } from './Projects/get-projects/get-projects.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path: 'Projects',component:GetProjectsComponent},
  {path: 'Projects/:id',component:GetProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }