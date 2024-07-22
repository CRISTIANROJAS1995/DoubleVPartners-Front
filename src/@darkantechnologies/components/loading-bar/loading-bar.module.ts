import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DarkanTechnologiesLoadingBarComponent } from '@darkantechnologies/components/loading-bar/loading-bar.component';

@NgModule({
    declarations: [
        DarkanTechnologiesLoadingBarComponent
    ],
    imports     : [
        CommonModule,
        MatProgressBarModule
    ],
    exports     : [
        DarkanTechnologiesLoadingBarComponent
    ]
})
export class DarkanTechnologiesLoadingBarModule
{
}
