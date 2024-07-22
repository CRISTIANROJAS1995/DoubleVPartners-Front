import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DarkanTechnologiesLoadingInterceptor } from '@darkantechnologies/services/loading/loading.interceptor';

@NgModule({
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: DarkanTechnologiesLoadingInterceptor,
            multi   : true
        }
    ]
})
export class DarkanTechnologiesLoadingModule
{
}
