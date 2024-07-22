import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DoublevPartnersCardModule } from '@doublevpartners/components/card';
import { DoublevPartnersAlertModule } from '@doublevpartners/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { AuthSignUpComponent } from './sign-up.component';
import { authSignUpRoutes } from './sign-up.routing';



@NgModule({
    declarations: [
        AuthSignUpComponent
    ],
    imports     : [
        RouterModule.forChild(authSignUpRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        DoublevPartnersCardModule,
        DoublevPartnersAlertModule,
        SharedModule,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AuthSignUpModule
{
}
