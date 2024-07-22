import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoublevPartnersDrawerComponent } from '@doublevpartners/components/drawer/drawer.component';

@NgModule({
    declarations: [
        DoublevPartnersDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        DoublevPartnersDrawerComponent
    ]
})
export class DoublevPartnersDrawerModule
{
}
