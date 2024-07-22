import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkanTechnologiesHighlightComponent } from '@darkantechnologies/components/highlight/highlight.component';

@NgModule({
    declarations: [
        DarkanTechnologiesHighlightComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        DarkanTechnologiesHighlightComponent
    ]
})
export class DarkanTechnologiesHighlightModule
{
}
