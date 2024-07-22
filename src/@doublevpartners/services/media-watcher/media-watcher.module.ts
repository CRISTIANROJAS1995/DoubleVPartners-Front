import { NgModule } from '@angular/core';
import { DoublevPartnersMediaWatcherService } from '@doublevpartners/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        DoublevPartnersMediaWatcherService
    ]
})
export class DoublevPartnersMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _doublevpartnersMediaWatcherService: DoublevPartnersMediaWatcherService)
    {
    }
}
