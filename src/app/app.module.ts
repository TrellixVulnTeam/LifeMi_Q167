import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { UserComponent } from './pages/user/user.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { RoleComponent } from './pages/role/role.component';
import { DataTablesModule } from 'angular-datatables';

// Services
import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';
import { RoleFormComponent } from './pages/role/role-form/role-form.component';
import { FunctionComponent } from './pages/function/function.component';
import { FunctionFormComponent } from './pages/function/function-form/function-form.component';
import { FunctionService } from './services/function.service';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    DataTablesModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserComponent,
    UserFormComponent,
    RoleComponent,
    RoleFormComponent,
    FunctionComponent,
    FunctionFormComponent,
  ],
  providers: [
    UserService,
    RoleService,
    FunctionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
