import { NgModule } from '@angular/core';
import { DoublevPartnersScrollResetDirective } from '@doublevpartners/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        DoublevPartnersScrollResetDirective
    ],
    exports     : [
        DoublevPartnersScrollResetDirective
    ]
})
export class DoublevPartnersScrollResetModule
{
}
