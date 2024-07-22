import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkanTechnologiesDrawerComponent } from '@darkantechnologies/components/drawer/drawer.component';

@NgModule({
    declarations: [
        DarkanTechnologiesDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        DarkanTechnologiesDrawerComponent
    ]
})
export class DarkanTechnologiesDrawerModule
{
}
