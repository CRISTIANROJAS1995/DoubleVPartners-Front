import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboards/alphraglamouria'
    { path: '', pathMatch: 'full', redirectTo: 'dashboards/alphraglamouria' },

    // Redirect signed in user to the '/dashboards/alphraglamouria'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'dashboards/alphraglamouria' },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule) },
        ]
    },
    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule) }
        ]
    },
    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            {
                path: 'dashboards', children: [
                    { path: 'alphraglamouria', loadChildren: () => import('app/modules/admin/dashboards/users/users.module').then(m => m.DashboardUsersModule) },
                ]
            },
            {
                path: 'pages', children: [
                    { path: 'edit-user', loadChildren: () => import('app/modules/admin/dashboards/users/edit/edit-user.module').then(m => m.EditUserModule) },
                    { path: 'last-news', loadChildren: () => import('app/modules/admin/pages/last-news/news/news.module').then(m => m.NewsModule) },
                    { path: 'add-news', loadChildren: () => import('app/modules/admin/pages/last-news/add-news/add-news.module').then(m => m.AddNewsModule) },
                ]
            },

            // 404 & Catch all
            { path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module) },
            { path: '**', redirectTo: '404-not-found' }
        ]
    }
];
