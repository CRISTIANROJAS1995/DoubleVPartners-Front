import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DoublevPartnersVerticalNavigationComponent } from '@doublevpartners/components/navigation/vertical/vertical.component';
import { DoublevPartnersNavigationService } from '@doublevpartners/components/navigation/navigation.service';
import { DoublevPartnersNavigationItem } from '@doublevpartners/components/navigation/navigation.types';
import { DoublevPartnersUtilsService } from '@doublevpartners/services/utils/utils.service';

@Component({
    selector       : 'doublevpartners-vertical-navigation-basic-item',
    templateUrl    : './basic.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoublevPartnersVerticalNavigationBasicItemComponent implements OnInit, OnDestroy
{
    @Input() item: DoublevPartnersNavigationItem;
    @Input() name: string;

    isActiveMatchOptions: IsActiveMatchOptions;
    private _doublevpartnersVerticalNavigationComponent: DoublevPartnersVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _doublevpartnersNavigationService: DoublevPartnersNavigationService,
        private _doublevpartnersUtilsService: DoublevPartnersUtilsService
    )
    {
        // Set the equivalent of {exact: false} as default for active match options.
        // We are not assigning the item.isActiveMatchOptions directly to the
        // [routerLinkActiveOptions] because if it's "undefined" initially, the router
        // will throw an error and stop working.
        this.isActiveMatchOptions = this._doublevpartnersUtilsService.subsetMatchOptions;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Set the "isActiveMatchOptions" either from item's
        // "isActiveMatchOptions" or the equivalent form of
        // item's "exactMatch" option
        this.isActiveMatchOptions =
            this.item.isActiveMatchOptions ?? this.item.exactMatch
                ? this._doublevpartnersUtilsService.exactMatchOptions
                : this._doublevpartnersUtilsService.subsetMatchOptions;

        // Get the parent navigation component
        this._doublevpartnersVerticalNavigationComponent = this._doublevpartnersNavigationService.getComponent(this.name);

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Subscribe to onRefreshed on the navigation component
        this._doublevpartnersVerticalNavigationComponent.onRefreshed.pipe(
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
