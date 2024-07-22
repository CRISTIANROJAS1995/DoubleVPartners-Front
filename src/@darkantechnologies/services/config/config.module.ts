import { ModuleWithProviders, NgModule } from '@angular/core';
import { DarkanTechnologiesConfigService } from '@darkantechnologies/services/config/config.service';
import { DARKAN_APP_CONFIG } from '@darkantechnologies/services/config/config.constants';

@NgModule()
export class DarkanTechnologiesConfigModule
{
    /**
     * Constructor
     */
    constructor(private _darkantechnologiesConfigService: DarkanTechnologiesConfigService)
    {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<DarkanTechnologiesConfigModule>
    {
        return {
            ngModule : DarkanTechnologiesConfigModule,
            providers: [
                {
                    provide : DARKAN_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
