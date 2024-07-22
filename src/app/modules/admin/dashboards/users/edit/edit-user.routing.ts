import { Route } from '@angular/router';
import { EditUserComponent } from './edit-user.component';
import { EditUserResolver } from './edit-user.resolvers';

export const editUserRoutes: Route[] = [
    {
        path     : ':id',
        component: EditUserComponent,
        resolve  : {
            activities: EditUserResolver
        }
    }
];
