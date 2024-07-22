import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DoublevPartnersAlertComponent } from '@doublevpartners/components/alert/alert.component';

@NgModule({
    declarations: [
        DoublevPartnersAlertComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        DoublevPartnersAlertComponent
    ]
})
export class DoublevPartnersAlertModule
{
}
