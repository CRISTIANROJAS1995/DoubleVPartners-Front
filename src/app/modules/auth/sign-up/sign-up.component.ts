/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    UntypedFormBuilder,
    UntypedFormGroup,
    NgForm,
    Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { doublevpartnersAnimations } from '@doublevpartners/animations';
import { AuthService } from 'app/core/auth/auth.service';
import { ResponseLoginModel } from 'app/core/models/user/response-login-model';
import { UserRequestModel } from 'app/core/models/user/user-request-model';

import Swal from 'sweetalert2';

@Component({
    selector: 'auth-sign-up',
    templateUrl: './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: doublevpartnersAnimations,
})
export class AuthSignUpComponent implements OnInit {
    @ViewChild('signUpNgForm') signInNgForm: NgForm;

    signUpForm: UntypedFormGroup;
    showAlert: boolean = false;
    requestUser: UserRequestModel = new UserRequestModel();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: UntypedFormBuilder,
        private _router: Router
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        this.signUpForm = this._formBuilder.group({
            email     : ['', [Validators.required, Validators.email]],
            password  : ['', Validators.required],
            nombre      : ['', Validators.required],
            numeroIdentificacion   : [''],
            telefono   : [''],
        }
    );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    signUp(): void {

        // Return if the form is invalid
        if (this.signUpForm.invalid) {
            Swal.fire({
                title: 'Ups...',
                text: 'Faltan campos por completar.',
                icon: 'warning',
                confirmButtonColor: '#cea35a',
                confirmButtonText: 'Continuar',
            });

            return;
        }

        this.signUpForm.disable();

        const dataFormValue = this.signUpForm.value;
        this.requestUser.email = dataFormValue.email;
        this.requestUser.password = dataFormValue.password;
        this.requestUser.nombre = dataFormValue.nombre;
        this.requestUser.numeroIdentificacion = dataFormValue.numeroIdentificacion;
        this.requestUser.telefono = dataFormValue.telefono;

        this._authService.signUp(this.requestUser).subscribe(
            (response: ResponseLoginModel) => {
                if (response.result) {
                    Swal.fire({
                        title: 'Hecho!',
                        text: 'Tu usuario ha sido creado exitosamente.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 3000
                    }).then((result) => {
                        this._router.navigate(['/sign-in']);
                    });
                } else {
                    // Re-enable the form
                    this.signUpForm.enable();

                    // Reset the form
                    this.signInNgForm.resetForm();

                    Swal.fire({
                        title: 'Oops...',
                        text: response.message,
                        icon: 'warning',
                        confirmButtonColor: '#cea35a',
                    });
                }
            },
            (response) => {
                // Re-enable the form
                this.signUpForm.enable();
                Swal.fire({
                    title: 'Oops...',
                    text: 'Se produjo un error inesperado, comuníquese con el administrador...',
                    icon: 'warning',
                    confirmButtonColor: '#cea35a',
                });
            }
        );
    }

}
