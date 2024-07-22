import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DoublevPartnersConfirmationService } from '@doublevpartners/services/confirmation/confirmation.service';
import { DoublevPartnersConfirmationDialogComponent } from '@doublevpartners/services/confirmation/dialog/dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DoublevPartnersConfirmationDialogComponent
    ],
    imports     : [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        CommonModule
    ],
    providers   : [
        DoublevPartnersConfirmationService
    ]
})
export class DoublevPartnersConfirmationModule
{
    /**
     * Constructor
     */
    constructor(private _doublevpartnersConfirmationService: DoublevPartnersConfirmationService)
    {
    }
}
