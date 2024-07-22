import { NgModule } from '@angular/core';
import { DarkanTechnologiesMediaWatcherService } from '@darkantechnologies/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        DarkanTechnologiesMediaWatcherService
    ]
})
export class DarkanTechnologiesMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _darkantechnologiesMediaWatcherService: DarkanTechnologiesMediaWatcherService)
    {
    }
}
