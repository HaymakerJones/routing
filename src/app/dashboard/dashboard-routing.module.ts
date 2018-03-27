import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'groups', component: GroupsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }

export const DashboardRoutes = routes;