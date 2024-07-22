import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject, tap } from 'rxjs';
import { environment } from 'environments/environment';
import { HiBeatDto } from 'app/core/models/hi-beat.dto';
import { ReactionDto } from 'app/core/models/reaction.dto';
import { UpdateHibeatResponseModel } from 'app/core/models/hibeat/update-responsive-model';
import { UserResponseDtoModel } from 'app/core/models/user/user-response-dto-model';
import { ResponseListModel } from '../models/generic/response-list.model';

@Injectable({
    providedIn: 'root'
})
export class GenericService {

    //private _data: BehaviorSubject<any> = new BehaviorSubject(null);

    private _lstRol: ReplaySubject<ResponseListModel[]> = new ReplaySubject<ResponseListModel[]>(1);
    private _lstState: ReplaySubject<ResponseListModel[]> = new ReplaySubject<ResponseListModel[]>(1);
    private _lstGender: ReplaySubject<ResponseListModel[]> = new ReplaySubject<ResponseListModel[]>(1);
    private _lstTypeIdentification: ReplaySubject<ResponseListModel[]> = new ReplaySubject<ResponseListModel[]>(1);

    constructor(private _httpClient: HttpClient) {
    }

    // get data$(): Observable<any> {
    //     return this._data.asObservable();
    // }

    get lstRol$(): Observable<ResponseListModel[]>
    {
        return this._lstRol.asObservable();
    }

    get lstState$(): Observable<ResponseListModel[]>
    {
        return this._lstState.asObservable();
    }

    get lstGender$(): Observable<ResponseListModel[]>
    {
        return this._lstGender.asObservable();
    }

    get lstTypeIdentification$(): Observable<ResponseListModel[]>
    {
        return this._lstTypeIdentification.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    getAllRole(): Observable<ResponseListModel[]> {
        return this._httpClient.get<ResponseListModel[]>(`${environment.api}/Generic/AllRole`).pipe(
            tap((users: ResponseListModel[]) => {
                this._lstRol.next(users);
            })
        );
    }

    getAllState(): Observable<ResponseListModel[]> {
        return this._httpClient.get<ResponseListModel[]>(`${environment.api}/Generic/AllState`).pipe(
            tap((users: ResponseListModel[]) => {
                this._lstState.next(users);
            })
        );
    }

    getAllGender(): Observable<ResponseListModel[]> {
        return this._httpClient.get<ResponseListModel[]>(`${environment.api}/Generic/AllGender`).pipe(
            tap((users: ResponseListModel[]) => {
                this._lstGender.next(users);
            })
        );
    }

    getAllTypeIdentification(): Observable<ResponseListModel[]> {
        return this._httpClient.get<ResponseListModel[]>(`${environment.api}/Generic/AllTypeIdentification`).pipe(
            tap((users: ResponseListModel[]) => {
                this._lstTypeIdentification.next(users);
            })
        );
    }



}
