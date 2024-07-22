import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DarkanTechnologiesScrollbarModule } from '@darkantechnologies/directives/scrollbar/public-api';
import { DarkanTechnologiesHorizontalNavigationBasicItemComponent } from '@darkantechnologies/components/navigation/horizontal/components/basic/basic.component';
import { DarkanTechnologiesHorizontalNavigationBranchItemComponent } from '@darkantechnologies/components/navigation/horizontal/components/branch/branch.component';
import { DarkanTechnologiesHorizontalNavigationDividerItemComponent } from '@darkantechnologies/components/navigation/horizontal/components/divider/divider.component';
import { DarkanTechnologiesHorizontalNavigationSpacerItemComponent } from '@darkantechnologies/components/navigation/horizontal/components/spacer/spacer.component';
import { DarkanTechnologiesHorizontalNavigationComponent } from '@darkantechnologies/components/navigation/horizontal/horizontal.component';
import { DarkanTechnologiesVerticalNavigationAsideItemComponent } from '@darkantechnologies/components/navigation/vertical/components/aside/aside.component';
import { DarkanTechnologiesVerticalNavigationBasicItemComponent } from '@darkantechnologies/components/navigation/vertical/components/basic/basic.component';
import { DarkanTechnologiesVerticalNavigationCollapsableItemComponent } from '@darkantechnologies/components/navigation/vertical/components/collapsable/collapsable.component';
import { DarkanTechnologiesVerticalNavigationDividerItemComponent } from '@darkantechnologies/components/navigation/vertical/components/divider/divider.component';
import { DarkanTechnologiesVerticalNavigationGroupItemComponent } from '@darkantechnologies/components/navigation/vertical/components/group/group.component';
import { DarkanTechnologiesVerticalNavigationSpacerItemComponent } from '@darkantechnologies/components/navigation/vertical/components/spacer/spacer.component';
import { DarkanTechnologiesVerticalNavigationComponent } from '@darkantechnologies/components/navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        DarkanTechnologiesHorizontalNavigationBasicItemComponent,
        DarkanTechnologiesHorizontalNavigationBranchItemComponent,
        DarkanTechnologiesHorizontalNavigationDividerItemComponent,
        DarkanTechnologiesHorizontalNavigationSpacerItemComponent,
        DarkanTechnologiesHorizontalNavigationComponent,
        DarkanTechnologiesVerticalNavigationAsideItemComponent,
        DarkanTechnologiesVerticalNavigationBasicItemComponent,
        DarkanTechnologiesVerticalNavigationCollapsableItemComponent,
        DarkanTechnologiesVerticalNavigationDividerItemComponent,
        DarkanTechnologiesVerticalNavigationGroupItemComponent,
        DarkanTechnologiesVerticalNavigationSpacerItemComponent,
        DarkanTechnologiesVerticalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        DarkanTechnologiesScrollbarModule
    ],
    exports     : [
        DarkanTechnologiesHorizontalNavigationComponent,
        DarkanTechnologiesVerticalNavigationComponent
    ]
})
export class DarkanTechnologiesNavigationModule
{
}
