import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DoublevPartnersFullscreenModule } from '@doublevpartners/components/fullscreen';
import { DoublevPartnersLoadingBarModule } from '@doublevpartners/components/loading-bar';
import { DoublevPartnersNavigationModule } from '@doublevpartners/components/navigation';
import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import { MessagesModule } from 'app/layout/common/messages/messages.module';
import { NotificationsModule } from 'app/layout/common/notifications/notifications.module';
import { SearchModule } from 'app/layout/common/search/search.module';
import { ShortcutsModule } from 'app/layout/common/shortcuts/shortcuts.module';
import { UserModule } from 'app/layout/common/user/user.module';
import { SharedModule } from 'app/shared/shared.module';
import { CenteredLayoutComponent } from 'app/layout/layouts/horizontal/centered/centered.component';

@NgModule({
    declarations: [
        CenteredLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        DoublevPartnersFullscreenModule,
        DoublevPartnersLoadingBarModule,
        DoublevPartnersNavigationModule,
        LanguagesModule,
        MessagesModule,
        NotificationsModule,
        SearchModule,
        ShortcutsModule,
        UserModule,
        SharedModule
    ],
    exports     : [
        CenteredLayoutComponent
    ]
})
export class CenteredLayoutModule
{
}
