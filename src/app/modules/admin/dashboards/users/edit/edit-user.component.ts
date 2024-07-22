import {
    ChangeDetectorRef,
    Component,
    HostListener,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {
    UntypedFormBuilder,
    UntypedFormGroup,
    NgForm,
    Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { doublevpartnersAnimations } from '@doublevpartners/animations';
import { FileUploadComponent } from 'app/shared/components/file-upload/file-upload.component';
import * as storage from '@aws-amplify/storage';
import imageCompression from 'browser-image-compression';
import { take, filter, takeUntil, Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { addPromotion } from 'app/core/models/promotion/add-promotion-model';

import { newsModel } from 'app/core/models/last-news/news.model';
import { ResponseListModel } from 'app/core/models/generic/response-list.model';
import { GenericService } from 'app/core/services/generic.service';
import { DashboardUsersService } from '../users.service';
import { UserResponseDtoModel } from 'app/core/models/user/user-response-dto-model';

@Component({
    selector: 'edit-user',
    templateUrl: './edit-user.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: doublevpartnersAnimations,
})
export class EditUserComponent implements OnInit {
    @ViewChild('editUserNgForm') editUserNgForm: NgForm;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    editUserForm: UntypedFormGroup;

    isLoading = false;
    isFormValid: boolean = false;
    isEdit: boolean = false;

    lstRol: ResponseListModel[] = [];
    lstState: ResponseListModel[] = [];
    lstGender: ResponseListModel[] = [];
    lstTypeIdentification: ResponseListModel[] = [];

    userModel: UserResponseDtoModel = new UserResponseDtoModel();

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _activatedRoute: ActivatedRoute,
        private _formBuilder: UntypedFormBuilder,
        private _router: Router,
        private _genericService: GenericService,
        private _dashboardUsersService: DashboardUsersService
    ) {}

    ngOnInit(): void {
        this._genericService.lstRol$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((rols: ResponseListModel[]) => {
                this.lstRol = rols;
                console.log(this.lstRol);
                this._changeDetectorRef.markForCheck();
            });

        this._genericService.lstState$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((states: ResponseListModel[]) => {
                this.lstState = states;
                console.log(this.lstState);
                this._changeDetectorRef.markForCheck();
            });

        this._genericService.lstGender$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((genders: ResponseListModel[]) => {
                this.lstGender = genders;
                console.log(this.lstGender);
                this._changeDetectorRef.markForCheck();
            });

        this._genericService.lstTypeIdentification$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((typeIdentifications: ResponseListModel[]) => {
                this.lstTypeIdentification = typeIdentifications;
                console.log(this.lstTypeIdentification);
                this._changeDetectorRef.markForCheck();
            });

        this.editUserForm = this._formBuilder.group({
            name: ['', Validators.required],
            lastName: [''],
            identification: [''],
            phone: [''],
            address: [''],
            state: [''],
            typeIdentification: [''],
            gender: [''],
            role: ['', Validators.required],
        });

        this._activatedRoute.params.pipe(take(1)).subscribe((params) => {
            if (!params['id']) {
                this._router.navigate(['/dashboards/alphraglamouria']);
                return;
            } else {
                this.getById(params['id']);
            }
        });
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    getById(id: any): void {
        this.loading();
        this._dashboardUsersService.getById(id).subscribe(
            (response: UserResponseDtoModel) => {
                this.userModel = response;
                console.log(this.userModel);
                this.hiddenLoading();

                this.editUserForm.patchValue({
                    name: this.userModel.name,
                    lastName: this.userModel.lastName,
                    identification: this.userModel.identification,
                    phone: this.userModel.phone,
                    address: this.userModel.address,
                    state: this.userModel.state,
                    typeIdentification: this.userModel.typeIdentification.name,
                    gender: this.userModel.gender,
                    role: this.userModel.role.id,
                });
            },
            (response) => {
                this.userModel = new UserResponseDtoModel();
                this.hiddenLoading();

                Swal.fire({
                    title: 'Oops...',
                    text: 'No hay información existente del usuario',
                    icon: 'error',
                    confirmButtonColor: '#cea35a',
                });
            }
        );
    }

    loading() {
        Swal.fire({
            title: 'Wait',
            text: 'Cargando informacion...',
            icon: 'info',
            confirmButtonColor: '#cea35a',
        });

        Swal.showLoading();
    }

    hiddenLoading() {
        Swal.close();
        Swal.hideLoading();
    }

    async sendData(): Promise<void> {
        // Return if the form is invalid
        if (this.editUserForm.invalid) {
            Swal.fire({
                title: 'Ups...',
                text: 'Faltan campos por completar..',
                icon: 'warning',
                confirmButtonColor: '#cea35a',
                confirmButtonText: 'Continue',
            });
            return;
        }
        this.isFormValid = false;
        const dataFormValue = this.editUserForm.value;

        //Fields value
        this.userModel.name = dataFormValue.name;
        this.userModel.lastName = dataFormValue.lastName;
        this.userModel.phone = dataFormValue.phone;
        this.userModel.address = dataFormValue.address;
        this.userModel.gender = dataFormValue.gender;
        this.userModel.state = dataFormValue.state;
        this.userModel.typeIdentification = dataFormValue.typeIdentification;
        this.userModel.identification = dataFormValue.identification;
        this.userModel.role = dataFormValue.role;

        console.log(this.userModel);

        this.loading();

        if (this.isEdit) {
            this._dashboardUsersService.update(this.userModel).subscribe(() => {
                this.hiddenLoading();
                this._router.navigate(['/dashboards/alphraglamouria']);
            });
        } else {
            Swal.fire({
                title: 'Oops...',
                text: 'An unexpected error occurred, please contact the administrator...',
                icon: 'warning',
                confirmButtonColor: '#9333EA',
            });
        }
    }

    changeRol(select: any){
        console.log(select.value);
    }
}
