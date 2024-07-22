import { NgModule } from '@angular/core';
import { DoublevPartnersUtilsService } from '@doublevpartners/services/utils/utils.service';

@NgModule({
    providers: [
        DoublevPartnersUtilsService
    ]
})
export class DoublevPartnersUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _doublevpartnersUtilsService: DoublevPartnersUtilsService)
    {
    }
}
