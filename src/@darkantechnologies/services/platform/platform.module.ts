import { NgModule } from '@angular/core';
import { DarkanTechnologiesPlatformService } from '@darkantechnologies/services/platform/platform.service';

@NgModule({
    providers: [
        DarkanTechnologiesPlatformService
    ]
})
export class DarkanTechnologiesPlatformModule
{
    /**
     * Constructor
     */
    constructor(private _darkantechnologiesPlatformService: DarkanTechnologiesPlatformService)
    {
    }
}
