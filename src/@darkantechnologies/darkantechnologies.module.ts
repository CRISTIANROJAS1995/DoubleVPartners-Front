import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { DarkanTechnologiesConfirmationModule } from '@darkantechnologies/services/confirmation';
import { DarkanTechnologiesLoadingModule } from '@darkantechnologies/services/loading';
import { DarkanTechnologiesMediaWatcherModule } from '@darkantechnologies/services/media-watcher/media-watcher.module';
import { DarkanTechnologiesPlatformModule } from '@darkantechnologies/services/platform/platform.module';
import { DarkanTechnologiesSplashScreenModule } from '@darkantechnologies/services/splash-screen/splash-screen.module';
import { DarkanTechnologiesUtilsModule } from '@darkantechnologies/services/utils/utils.module';

@NgModule({
    imports  : [
        DarkanTechnologiesConfirmationModule,
        DarkanTechnologiesLoadingModule,
        DarkanTechnologiesMediaWatcherModule,
        DarkanTechnologiesPlatformModule,
        DarkanTechnologiesSplashScreenModule,
        DarkanTechnologiesUtilsModule
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
export class DarkanTechnologiesModule
{
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: DarkanTechnologiesModule)
    {
        if ( parentModule )
        {
            throw new Error('DarkanTechnologiesModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
