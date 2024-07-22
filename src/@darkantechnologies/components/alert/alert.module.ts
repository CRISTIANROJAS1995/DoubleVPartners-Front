import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DarkanTechnologiesAlertComponent } from '@darkantechnologies/components/alert/alert.component';

@NgModule({
    declarations: [
        DarkanTechnologiesAlertComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        DarkanTechnologiesAlertComponent
    ]
})
export class DarkanTechnologiesAlertModule
{
}
