import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DoublevPartnersLoadingBarComponent } from '@doublevpartners/components/loading-bar/loading-bar.component';

@NgModule({
    declarations: [
        DoublevPartnersLoadingBarComponent
    ],
    imports     : [
        CommonModule,
        MatProgressBarModule
    ],
    exports     : [
        DoublevPartnersLoadingBarComponent
    ]
})
export class DoublevPartnersLoadingBarModule
{
}
