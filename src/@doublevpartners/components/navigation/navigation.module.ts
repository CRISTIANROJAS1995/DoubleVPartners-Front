import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DoublevPartnersScrollbarModule } from '@doublevpartners/directives/scrollbar/public-api';
import { DoublevPartnersHorizontalNavigationBasicItemComponent } from '@doublevpartners/components/navigation/horizontal/components/basic/basic.component';
import { DoublevPartnersHorizontalNavigationBranchItemComponent } from '@doublevpartners/components/navigation/horizontal/components/branch/branch.component';
import { DoublevPartnersHorizontalNavigationDividerItemComponent } from '@doublevpartners/components/navigation/horizontal/components/divider/divider.component';
import { DoublevPartnersHorizontalNavigationSpacerItemComponent } from '@doublevpartners/components/navigation/horizontal/components/spacer/spacer.component';
import { DoublevPartnersHorizontalNavigationComponent } from '@doublevpartners/components/navigation/horizontal/horizontal.component';
import { DoublevPartnersVerticalNavigationAsideItemComponent } from '@doublevpartners/components/navigation/vertical/components/aside/aside.component';
import { DoublevPartnersVerticalNavigationBasicItemComponent } from '@doublevpartners/components/navigation/vertical/components/basic/basic.component';
import { DoublevPartnersVerticalNavigationCollapsableItemComponent } from '@doublevpartners/components/navigation/vertical/components/collapsable/collapsable.component';
import { DoublevPartnersVerticalNavigationDividerItemComponent } from '@doublevpartners/components/navigation/vertical/components/divider/divider.component';
import { DoublevPartnersVerticalNavigationGroupItemComponent } from '@doublevpartners/components/navigation/vertical/components/group/group.component';
import { DoublevPartnersVerticalNavigationSpacerItemComponent } from '@doublevpartners/components/navigation/vertical/components/spacer/spacer.component';
import { DoublevPartnersVerticalNavigationComponent } from '@doublevpartners/components/navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        DoublevPartnersHorizontalNavigationBasicItemComponent,
        DoublevPartnersHorizontalNavigationBranchItemComponent,
        DoublevPartnersHorizontalNavigationDividerItemComponent,
        DoublevPartnersHorizontalNavigationSpacerItemComponent,
        DoublevPartnersHorizontalNavigationComponent,
        DoublevPartnersVerticalNavigationAsideItemComponent,
        DoublevPartnersVerticalNavigationBasicItemComponent,
        DoublevPartnersVerticalNavigationCollapsableItemComponent,
        DoublevPartnersVerticalNavigationDividerItemComponent,
        DoublevPartnersVerticalNavigationGroupItemComponent,
        DoublevPartnersVerticalNavigationSpacerItemComponent,
        DoublevPartnersVerticalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        DoublevPartnersScrollbarModule
    ],
    exports     : [
        DoublevPartnersHorizontalNavigationComponent,
        DoublevPartnersVerticalNavigationComponent
    ]
})
export class DoublevPartnersNavigationModule
{
}
