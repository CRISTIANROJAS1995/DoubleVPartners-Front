import { NgModule } from '@angular/core';
import { DoublevPartnersPlatformService } from '@doublevpartners/services/platform/platform.service';

@NgModule({
    providers: [
        DoublevPartnersPlatformService
    ]
})
export class DoublevPartnersPlatformModule
{
    /**
     * Constructor
     */
    constructor(private _doublevpartnersPlatformService: DoublevPartnersPlatformService)
    {
    }
}
