import { NgModule } from '@angular/core';
import { DoublevPartnersSplashScreenService } from '@doublevpartners/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        DoublevPartnersSplashScreenService
    ]
})
export class DoublevPartnersSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _doublevpartnersSplashScreenService: DoublevPartnersSplashScreenService)
    {
    }
}
