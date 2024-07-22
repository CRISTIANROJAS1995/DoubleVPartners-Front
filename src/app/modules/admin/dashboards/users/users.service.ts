import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject, tap } from 'rxjs';
import { environment } from 'environments/environment';
import { UserResponseDtoModel } from 'app/core/models/user/user-response-dto-model';

@Injectable({
    providedIn: 'root'
})
export class DashboardUsersService {

    private _data: BehaviorSubject<any> = new BehaviorSubject(null);
    private _users: ReplaySubject<UserResponseDtoModel[]> = new ReplaySubject<UserResponseDtoModel[]>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for data
     */
    get data$(): Observable<any> {
        return this._data.asObservable();
    }

    get users$(): Observable<UserResponseDtoModel[]>
    {
        return this._users.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    getMy(): Observable<UserResponseDtoModel[]> {
        return this._httpClient.get<UserResponseDtoModel[]>(`${environment.api}/User`);
    }

    getAll(): Observable<UserResponseDtoModel[]> {
        return this._httpClient.get<UserResponseDtoModel[]>(`${environment.api}/User/All`).pipe(
            tap((users: UserResponseDtoModel[]) => {
                this._users.next(users);
            })
        );
    }

    getById(id: string): Observable<UserResponseDtoModel> {
        return this._httpClient.get<UserResponseDtoModel>(`${environment.api}/User/${id}`);
    }

    update(id: UserResponseDtoModel): Observable<UserResponseDtoModel> {
        return this._httpClient.put<UserResponseDtoModel>(`${environment.api}/User`, id);
    }


}
