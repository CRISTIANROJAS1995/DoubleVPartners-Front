import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DoublevPartnersHorizontalNavigationComponent } from '@doublevpartners/components/navigation/horizontal/horizontal.component';
import { DoublevPartnersNavigationService } from '@doublevpartners/components/navigation/navigation.service';
import { DoublevPartnersNavigationItem } from '@doublevpartners/components/navigation/navigation.types';

@Component({
    selector       : 'doublevpartners-horizontal-navigation-spacer-item',
    templateUrl    : './spacer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoublevPartnersHorizontalNavigationSpacerItemComponent implements OnInit, OnDestroy
{
    @Input() item: DoublevPartnersNavigationItem;
    @Input() name: string;

    private _doublevpartnersHorizontalNavigationComponent: DoublevPartnersHorizontalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _doublevpartnersNavigationService: DoublevPartnersNavigationService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the parent navigation component
        this._doublevpartnersHorizontalNavigationComponent = this._doublevpartnersNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._doublevpartnersHorizontalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
