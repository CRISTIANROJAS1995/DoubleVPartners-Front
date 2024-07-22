import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkanTechnologiesMasonryComponent } from '@darkantechnologies/components/masonry/masonry.component';

@NgModule({
    declarations: [
        DarkanTechnologiesMasonryComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        DarkanTechnologiesMasonryComponent
    ]
})
export class DarkanTechnologiesMasonryModule
{
}
