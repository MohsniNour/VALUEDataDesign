import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule, MAT_MENU_PANEL } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { GetProjectsComponent } from './Projects/get-projects/get-projects.component';
import { HttpClientModule } from '@angular/common/http';
import { GetProjectComponent } from './Projects/get-project/get-project.component';
import { AddProjectDialogComponent } from './Projects/add-project-dialog/add-project-dialog.component';
import { AddModelDialogComponent } from './models/add-model-dialog/add-model-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    HomeComponent,
    GetProjectsComponent,
    GetProjectComponent,
    AddProjectDialogComponent,
    AddModelDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Material IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
