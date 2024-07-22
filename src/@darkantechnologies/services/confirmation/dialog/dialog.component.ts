import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DarkanTechnologiesConfirmationConfig } from '@darkantechnologies/services/confirmation/confirmation.types';

@Component({
    selector     : 'darkantechnologies-confirmation-dialog',
    templateUrl  : './dialog.component.html',
    styles       : [
        `
            .darkantechnologies-confirmation-dialog-panel {
                @screen md {
                    @apply w-128;
                }

                .mat-dialog-container {
                    padding: 0 !important;
                }
            }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class DarkanTechnologiesConfirmationDialogComponent
{
    /**
     * Constructor
     */
    constructor(@Inject(MAT_DIALOG_DATA) public data: DarkanTechnologiesConfirmationConfig)
    {
    }

}
