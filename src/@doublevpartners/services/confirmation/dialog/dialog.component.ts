import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoublevPartnersConfirmationConfig } from '@doublevpartners/services/confirmation/confirmation.types';

@Component({
    selector     : 'doublevpartners-confirmation-dialog',
    templateUrl  : './dialog.component.html',
    styles       : [
        `
            .doublevpartners-confirmation-dialog-panel {
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
export class DoublevPartnersConfirmationDialogComponent
{
    /**
     * Constructor
     */
    constructor(@Inject(MAT_DIALOG_DATA) public data: DoublevPartnersConfirmationConfig)
    {
    }

}
