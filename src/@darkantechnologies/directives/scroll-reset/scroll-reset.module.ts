import { NgModule } from '@angular/core';
import { DarkanTechnologiesScrollResetDirective } from '@darkantechnologies/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        DarkanTechnologiesScrollResetDirective
    ],
    exports     : [
        DarkanTechnologiesScrollResetDirective
    ]
})
export class DarkanTechnologiesScrollResetModule
{
}
