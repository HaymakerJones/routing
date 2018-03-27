import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    exports: [
        DashboardComponent,
        UsersComponent,
        GroupsComponent
    ],
    declarations: [
        DashboardComponent,
        UsersComponent,
        GroupsComponent
    ],
    providers: [],
})
export class DashboardModule { }
