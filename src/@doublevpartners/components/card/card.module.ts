import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoublevPartnersCardComponent } from '@doublevpartners/components/card/card.component';

@NgModule({
    declarations: [
        DoublevPartnersCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        DoublevPartnersCardComponent
    ]
})
export class DoublevPartnersCardModule
{
}
