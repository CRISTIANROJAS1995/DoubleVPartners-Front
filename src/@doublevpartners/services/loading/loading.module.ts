import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DoublevPartnersLoadingInterceptor } from '@doublevpartners/services/loading/loading.interceptor';

@NgModule({
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: DoublevPartnersLoadingInterceptor,
            multi   : true
        }
    ]
})
export class DoublevPartnersLoadingModule
{
}
