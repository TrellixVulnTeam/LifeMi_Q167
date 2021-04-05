import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UserComponent } from 'src/app/pages/user/user.component';
import { RoleComponent } from 'src/app/pages/role/role.component';
import { UserFormComponent } from 'src/app/pages/user/user-form/user-form.component';
import { RoleFormComponent } from 'src/app/pages/role/role-form/role-form.component';
import { FunctionComponent } from 'src/app/pages/function/function.component';
import { FunctionFormComponent } from 'src/app/pages/function/function-form/function-form.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    // Usuarios
    { path: 'user',           component: UserComponent },
    { path: 'form-user',      component: UserFormComponent },
    { path: 'form-user/:id',  component: UserFormComponent},
    // Roles
    { path: 'role',           component: RoleComponent },
    { path: 'form-role',      component: RoleFormComponent },
    { path: 'form-role/:id',  component: RoleFormComponent},
    // Funciones
    { path: 'function',           component: FunctionComponent },
    { path: 'form-function',      component: FunctionFormComponent },
    { path: 'form-function/:id',  component: FunctionFormComponent},
];
