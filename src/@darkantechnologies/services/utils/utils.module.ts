import { NgModule } from '@angular/core';
import { DarkanTechnologiesUtilsService } from '@darkantechnologies/services/utils/utils.service';

@NgModule({
    providers: [
        DarkanTechnologiesUtilsService
    ]
})
export class DarkanTechnologiesUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _darkantechnologiesUtilsService: DarkanTechnologiesUtilsService)
    {
    }
}
