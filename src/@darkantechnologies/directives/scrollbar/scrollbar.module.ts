import { NgModule } from '@angular/core';
import { DarkanTechnologiesScrollbarDirective } from '@darkantechnologies/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        DarkanTechnologiesScrollbarDirective
    ],
    exports     : [
        DarkanTechnologiesScrollbarDirective
    ]
})
export class DarkanTechnologiesScrollbarModule
{
}
