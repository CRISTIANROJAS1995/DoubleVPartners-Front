import { NgModule } from '@angular/core';
import { DarkanTechnologiesSplashScreenService } from '@darkantechnologies/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        DarkanTechnologiesSplashScreenService
    ]
})
export class DarkanTechnologiesSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _darkantechnologiesSplashScreenService: DarkanTechnologiesSplashScreenService)
    {
    }
}
