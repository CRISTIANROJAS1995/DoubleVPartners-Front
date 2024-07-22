import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkanTechnologiesCardComponent } from '@darkantechnologies/components/card/card.component';

@NgModule({
    declarations: [
        DarkanTechnologiesCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        DarkanTechnologiesCardComponent
    ]
})
export class DarkanTechnologiesCardModule
{
}
