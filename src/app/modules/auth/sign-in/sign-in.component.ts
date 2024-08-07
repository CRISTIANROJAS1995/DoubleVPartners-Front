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
import { DoublevPartnersAlertType } from '@doublevpartners/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { ResponseLoginModel } from 'app/core/models/user/response-login-model';

import Swal from 'sweetalert2';

@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: doublevpartnersAnimations,
})
export class AuthSignInComponent implements OnInit {
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: DoublevPartnersAlertType; message: string } = {
        type: 'success',
        message: '',
    };
    signInForm: UntypedFormGroup;
    showAlert: boolean = false;

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
        // Create the form
        this.signInForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            rememberMe: [''],
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void {

        // Return if the form is invalid
        if (this.signInForm.invalid) {
            Swal.fire({
                title: 'Ups...',
                text: 'Faltan campos por completar.',
                icon: 'warning',
                confirmButtonColor: '#cea35a',
                confirmButtonText: 'Continuar',
            });

            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign in
        this._authService.signIn(this.signInForm.value).subscribe(
            (login: ResponseLoginModel) => {

                if (login.result) {
                    // Set the redirect url.
                    // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                    // to the correct page after a successful sign in. This way, that url can be set via
                    // routing file and we don't have to touch here.
                    const redirectURL =
                        this._activatedRoute.snapshot.queryParamMap.get(
                            'redirectURL'
                        ) || '/signed-in-redirect';
                    // Navigate to the redirect url
                    this._router.navigateByUrl(redirectURL);
                } else {
                    // Re-enable the form
                    this.signInForm.enable();

                    // Reset the form
                    this.signInNgForm.resetForm();

                    Swal.fire({
                        title: 'Oops...',
                        text: login.message,
                        icon: 'warning',
                        confirmButtonColor: '#cea35a',
                    });
                }
            },
            (response) => {
                // Re-enable the form
                this.signInForm.enable();
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
