import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { DoublevPartnersConfirmationModule } from '@doublevpartners/services/confirmation';
import { DoublevPartnersLoadingModule } from '@doublevpartners/services/loading';
import { DoublevPartnersMediaWatcherModule } from '@doublevpartners/services/media-watcher/media-watcher.module';
import { DoublevPartnersPlatformModule } from '@doublevpartners/services/platform/platform.module';
import { DoublevPartnersSplashScreenModule } from '@doublevpartners/services/splash-screen/splash-screen.module';
import { DoublevPartnersUtilsModule } from '@doublevpartners/services/utils/utils.module';

@NgModule({
    imports  : [
        DoublevPartnersConfirmationModule,
        DoublevPartnersLoadingModule,
        DoublevPartnersMediaWatcherModule,
        DoublevPartnersPlatformModule,
        DoublevPartnersSplashScreenModule,
        DoublevPartnersUtilsModule
    ],
    providers: [
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true
            }
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class DoublevPartnersModule
{
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: DoublevPartnersModule)
    {
        if ( parentModule )
        {
            throw new Error('DoublevPartnersModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
