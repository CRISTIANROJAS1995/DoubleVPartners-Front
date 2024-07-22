import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardUsersService } from './users.service';

@Injectable({
    providedIn: 'root'
})
export class DashboardUsersResolver
{
    /**
     * Constructor
     */
    constructor(private _dashboardUsersService: DashboardUsersService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._dashboardUsersService.getAll();
    }
}
