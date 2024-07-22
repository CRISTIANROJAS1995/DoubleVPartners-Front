import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { GenericService } from 'app/core/services/generic.service';
import { forkJoin, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class EditUserResolver
{
    /**
     * Constructor
     */
    constructor(private _genericService: GenericService)
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
        return forkJoin([
            this._genericService.getAllRole(),
            this._genericService.getAllState(),
            this._genericService.getAllGender(),
            this._genericService.getAllTypeIdentification()
        ]);
    }
}
