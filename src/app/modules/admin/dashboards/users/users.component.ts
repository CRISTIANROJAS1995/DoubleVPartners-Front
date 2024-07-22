import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
import { DashboardUsersService } from './users.service';
import { UserService } from 'app/core/user/user.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import Swal from 'sweetalert2';
import { HiBeatDto } from 'app/core/models/hi-beat.dto';
import { ReactionDto } from 'app/core/models/reaction.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { UserResponseDtoModel } from 'app/core/models/user/user-response-dto-model';
import { HibeatResponseModel } from 'app/core/models/hibeat/hibeat-response-model';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'dashboard-users',
    templateUrl: './users.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class DashboardUsersComponent
    implements OnInit, AfterViewInit, OnDestroy
{
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    allUsersModel: UserResponseDtoModel[] = [];
    userModel: UserResponseDtoModel = new UserResponseDtoModel();

    displayedColumns: string[] = [
        'name',
        'email',
        'typeIdentification',
        'identification',
        'phone',
        'role',
        'state',
        'actions',
    ];
    dataSource: MatTableDataSource<UserResponseDtoModel>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _matDialog: MatDialog,
        private _userService: UserService,
        private _dashboardUsersService: DashboardUsersService
    ) {}

    ngOnInit(): void {

        //my user
        this._userService.user$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((user: UserResponseDtoModel) => {
                this.userModel = user;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        //all users
        this._dashboardUsersService.users$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((users: UserResponseDtoModel[]) => {
                this.allUsersModel = users;

                this.dataSource = new MatTableDataSource(this.allUsersModel);

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    editData(data: any){
        console.log(data);
    }

    editUser(user: UserResponseDtoModel) {
        this._router.navigate(['/pages/edit-user', user.identifier]);
    }

}
