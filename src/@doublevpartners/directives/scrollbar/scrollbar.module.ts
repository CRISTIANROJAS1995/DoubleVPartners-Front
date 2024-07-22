import { NgModule } from '@angular/core';
import { DoublevPartnersScrollbarDirective } from '@doublevpartners/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        DoublevPartnersScrollbarDirective
    ],
    exports     : [
        DoublevPartnersScrollbarDirective
    ]
})
export class DoublevPartnersScrollbarModule
{
}
