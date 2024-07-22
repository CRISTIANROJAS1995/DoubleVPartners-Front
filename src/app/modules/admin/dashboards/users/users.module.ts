import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';
import { DashboardUsersComponent } from './users.component';
import { dashboardUsersRoutes } from './users.routing';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DarkanTechnologiesDrawerModule } from '@darkantechnologies/components/drawer';
import { DarkanTechnologiesScrollbarModule } from '@darkantechnologies/directives/scrollbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DurationPipe } from 'app/shared/pipes/duration.pipe';


@NgModule({
    declarations: [
        DashboardUsersComponent,
    ],
    imports     : [
        RouterModule.forChild(dashboardUsersRoutes),
        CommonModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatSortModule,
        MatTableModule,
        NgApexchartsModule,
        MatFormFieldModule,
        MatInputModule,
        DarkanTechnologiesDrawerModule,
        DarkanTechnologiesScrollbarModule,
        SharedModule,
        MatPaginatorModule
    ],
    exports: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardUsersModule
{
}
