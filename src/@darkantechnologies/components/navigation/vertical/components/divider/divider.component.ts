import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DarkanTechnologiesVerticalNavigationComponent } from '@darkantechnologies/components/navigation/vertical/vertical.component';
import { DarkanTechnologiesNavigationService } from '@darkantechnologies/components/navigation/navigation.service';
import { DarkanTechnologiesNavigationItem } from '@darkantechnologies/components/navigation/navigation.types';

@Component({
    selector       : 'darkantechnologies-vertical-navigation-divider-item',
    templateUrl    : './divider.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DarkanTechnologiesVerticalNavigationDividerItemComponent implements OnInit, OnDestroy
{
    @Input() item: DarkanTechnologiesNavigationItem;
    @Input() name: string;

    private _darkantechnologiesVerticalNavigationComponent: DarkanTechnologiesVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _darkantechnologiesNavigationService: DarkanTechnologiesNavigationService
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
        this._darkantechnologiesVerticalNavigationComponent = this._darkantechnologiesNavigationService.getComponent(this.name);

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