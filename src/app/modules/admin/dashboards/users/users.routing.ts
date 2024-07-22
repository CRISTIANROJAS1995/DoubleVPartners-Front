import { Route } from '@angular/router';
import { DashboardUsersComponent } from './users.component';
import { DashboardUsersResolver } from './users.resolvers';

export const dashboardUsersRoutes: Route[] = [
    {
        path     : '',
        component: DashboardUsersComponent,
        resolve  : {
            data: DashboardUsersResolver
        }
    }
];
