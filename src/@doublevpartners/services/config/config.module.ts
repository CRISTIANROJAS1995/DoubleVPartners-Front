import { ModuleWithProviders, NgModule } from '@angular/core';
import { DoublevPartnersConfigService } from '@doublevpartners/services/config/config.service';
import { DOUBLEVPARTNERS_APP_CONFIG } from '@doublevpartners/services/config/config.constants';

@NgModule()
export class DoublevPartnersConfigModule
{
    /**
     * Constructor
     */
    constructor(private _doublevpartnersConfigService: DoublevPartnersConfigService)
    {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<DoublevPartnersConfigModule>
    {
        return {
            ngModule : DoublevPartnersConfigModule,
            providers: [
                {
                    provide : DOUBLEVPARTNERS_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
