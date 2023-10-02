import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetModelComponent } from './models/get-model/get-model.component';
import { GetProjectComponent } from './Projects/get-project/get-project.component';
import { GetProjectsComponent } from './Projects/get-projects/get-projects.component';
import { AddTabDialogComponent } from './tabs/add-tab-dialog/add-tab-dialog.component';
import { GetTabComponent } from './tabs/get-tab/get-tab.component';
import { GetTagsComponent } from './tags/get-tags/get-tags.component';

const routes: Routes = [
  {path: '',redirectTo:'Home',pathMatch:'full'},
  {path: 'Home',component:HomeComponent},
  {path: 'Projects',component:GetProjectsComponent},
  {path: 'Projects/:id',component:GetProjectComponent},
  {path: 'Projects/:idProject/model/:id',component:GetModelComponent},
  {path: 'Projects/:idProject/model/:idModel/tab/add',component:AddTabDialogComponent},
  {path: 'Projects/:idProject/model/:idModel/tab/:id',component:GetTabComponent},
  {path: 'Tags',component:GetTagsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
