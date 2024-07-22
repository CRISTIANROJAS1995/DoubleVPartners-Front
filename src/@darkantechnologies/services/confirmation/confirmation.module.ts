import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DarkanTechnologiesConfirmationService } from '@darkantechnologies/services/confirmation/confirmation.service';
import { DarkanTechnologiesConfirmationDialogComponent } from '@darkantechnologies/services/confirmation/dialog/dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DarkanTechnologiesConfirmationDialogComponent
    ],
    imports     : [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        CommonModule
    ],
    providers   : [
        DarkanTechnologiesConfirmationService
    ]
})
export class DarkanTechnologiesConfirmationModule
{
    /**
     * Constructor
     */
    constructor(private _darkantechnologiesConfirmationService: DarkanTechnologiesConfirmationService)
    {
    }
}
