import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoublevPartnersMasonryComponent } from '@doublevpartners/components/masonry/masonry.component';

@NgModule({
    declarations: [
        DoublevPartnersMasonryComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        DoublevPartnersMasonryComponent
    ]
})
export class DoublevPartnersMasonryModule
{
}
