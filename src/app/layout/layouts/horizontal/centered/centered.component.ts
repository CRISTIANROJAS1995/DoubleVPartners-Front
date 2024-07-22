import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DarkanTechnologiesMediaWatcherService } from '@darkantechnologies/services/media-watcher';
import { DarkanTechnologiesNavigationService, DarkanTechnologiesVerticalNavigationComponent } from '@darkantechnologies/components/navigation';
import { Navigation, defaultNavigation, horizontalNavigation } from 'app/core/navigation/navigation.types';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { UserService } from 'app/core/user/user.service';
import { UserResponseDtoModel } from 'app/core/models/user/user-response-dto-model';

@Component({
    selector: 'centered-layout',
    templateUrl: './centered.component.html',
    encapsulation: ViewEncapsulation.None
})
export class CenteredLayoutComponent implements OnInit, OnDestroy {
    navigation: Navigation = new Navigation();
    userModel: UserResponseDtoModel = new UserResponseDtoModel();
    isScreenSmall: boolean;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _navigationService: NavigationService,
        private _darkantechnologiesMediaWatcherService: DarkanTechnologiesMediaWatcherService,
        private _userService: UserService,
        private _darkantechnologiesNavigationService: DarkanTechnologiesNavigationService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for current year
     */
    get currentYear(): number {
        return new Date().getFullYear();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.getDataUser();

        //default menú
        this.navigation.horizontal = horizontalNavigation;
        this.navigation.default = defaultNavigation;


        // Subscribe to media changes
        this._darkantechnologiesMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {

                // Check if the screen is small
                this.isScreenSmall = !matchingAliases.includes('md');
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    getDataUser(): void {

        // Sign in
        this._userService.getMyUser()
            .subscribe(
                (response: UserResponseDtoModel) => {
                    this.userModel = response;
                },
                (response) => {
                    this.userModel = new UserResponseDtoModel();
                }
            );
    }

    /**
     * Toggle navigation
     *
     * @param name
     */
    toggleNavigation(name: string): void {
        // Get the navigation
        const navigation = this._darkantechnologiesNavigationService.getComponent<DarkanTechnologiesVerticalNavigationComponent>(name);

        if (navigation) {
            // Toggle the opened status
            navigation.toggle();
        }
    }
}
