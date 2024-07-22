import { NgModule } from '@angular/core';
import { DarkanTechnologiesFindByKeyPipe } from '@darkantechnologies/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        DarkanTechnologiesFindByKeyPipe
    ],
    exports     : [
        DarkanTechnologiesFindByKeyPipe
    ]
})
export class DarkanTechnologiesFindByKeyPipeModule
{
}
