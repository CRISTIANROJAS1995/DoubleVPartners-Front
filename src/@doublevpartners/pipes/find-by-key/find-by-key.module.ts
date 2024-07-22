import { NgModule } from '@angular/core';
import { DoublevPartnersFindByKeyPipe } from '@doublevpartners/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        DoublevPartnersFindByKeyPipe
    ],
    exports     : [
        DoublevPartnersFindByKeyPipe
    ]
})
export class DoublevPartnersFindByKeyPipeModule
{
}
