import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { GetProjectsComponent } from './Projects/get-projects/get-projects.component';
import { HttpClientModule } from '@angular/common/http';
import { GetProjectComponent } from './Projects/get-project/get-project.component';
import { AddProjectDialogComponent } from './Projects/add-project-dialog/add-project-dialog.component';
import { AddModelDialogComponent } from './models/add-model-dialog/add-model-dialog.component';
import { GetModelComponent } from './models/get-model/get-model.component';
import { UpdateProjectDialogComponent } from './Projects/update-project-dialog/update-project-dialog.component';
import { UpdateModelDialogComponent } from './models/update-model-dialog/update-model-dialog.component';
import { GetTabComponent } from './tabs/get-tab/get-tab.component';
import { AddJoinComponent } from './joins/add-join/add-join.component';
import { DeleteProjectComponent } from './Projects/delete-project/delete-project.component';
import { DeleteModelDialogComponent } from './models/delete-model-dialog/delete-model-dialog.component';
import { DatePipe } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { AddTabDialogComponent } from './tabs/add-tab-dialog/add-tab-dialog.component';
import { AddAttributeDialogComponent } from './attributes/add-attribute-dialog/add-attribute-dialog.component';
import { DeleteAttributeComponent } from './attributes/delete-attribute/delete-attribute.component';
import { UpdateTabDialogComponent } from './tabs/update-tab-dialog/update-tab-dialog.component';
import { UpdateAttributeDialogComponent } from './attributes/update-attribute-dialog/update-attribute-dialog.component';
import { GetTagsComponent } from './tags/get-tags/get-tags.component';
import { AddTagComponent } from './tags/add-tag/add-tag.component';
import { DeleteTagComponent } from './tags/delete-tag/delete-tag.component';
import { UpdateTagComponent } from './tags/update-tag/update-tag.component';
import { DeleteTabComponent } from './tabs/delete-tab/delete-tab.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    HomeComponent,
    GetProjectsComponent,
    GetProjectComponent,
    AddProjectDialogComponent,
    AddModelDialogComponent,
    GetModelComponent,
    UpdateProjectDialogComponent,
    UpdateModelDialogComponent,
    GetTabComponent,
    AddJoinComponent,
    DeleteProjectComponent,
    DeleteModelDialogComponent,
    AddTabDialogComponent,
    AddAttributeDialogComponent,
    DeleteAttributeComponent,
    UpdateTabDialogComponent,
    UpdateAttributeDialogComponent,
    GetTagsComponent,
    AddTagComponent,
    DeleteTagComponent,
    UpdateTagComponent,
    DeleteTabComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // Material IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    DragDropModule, 
    MatTableModule,
    MatSelectModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    //jsPlumb
  ],
  providers: [DatePipe,
  {
    provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor,multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
