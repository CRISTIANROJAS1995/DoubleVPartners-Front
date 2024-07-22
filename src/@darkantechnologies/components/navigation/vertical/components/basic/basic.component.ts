import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DarkanTechnologiesVerticalNavigationComponent } from '@darkantechnologies/components/navigation/vertical/vertical.component';
import { DarkanTechnologiesNavigationService } from '@darkantechnologies/components/navigation/navigation.service';
import { DarkanTechnologiesNavigationItem } from '@darkantechnologies/components/navigation/navigation.types';
import { DarkanTechnologiesUtilsService } from '@darkantechnologies/services/utils/utils.service';

@Component({
    selector       : 'darkantechnologies-vertical-navigation-basic-item',
    templateUrl    : './basic.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DarkanTechnologiesVerticalNavigationBasicItemComponent implements OnInit, OnDestroy
{
    @Input() item: DarkanTechnologiesNavigationItem;
    @Input() name: string;

    isActiveMatchOptions: IsActiveMatchOptions;
    private _darkantechnologiesVerticalNavigationComponent: DarkanTechnologiesVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _darkantechnologiesNavigationService: DarkanTechnologiesNavigationService,
        private _darkantechnologiesUtilsService: DarkanTechnologiesUtilsService
    )
    {
        // Set the equivalent of {exact: false} as default for active match options.
        // We are not assigning the item.isActiveMatchOptions directly to the
        // [routerLinkActiveOptions] because if it's "undefined" initially, the router
        // will throw an error and stop working.
        this.isActiveMatchOptions = this._darkantechnologiesUtilsService.subsetMatchOptions;
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
                ? this._darkantechnologiesUtilsService.exactMatchOptions
                : this._darkantechnologiesUtilsService.subsetMatchOptions;

        // Get the parent navigation component
        this._darkantechnologiesVerticalNavigationComponent = this._darkantechnologiesNavigationService.getComponent(this.name);

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Subscribe to onRefreshed on the navigation component
        this._darkantechnologiesVerticalNavigationComponent.onRefreshed.pipe(
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
