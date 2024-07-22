import { Injectable } from '@angular/core';
import { DoublevPartnersDrawerComponent } from '@doublevpartners/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root'
})
export class DoublevPartnersDrawerService
{
    private _componentRegistry: Map<string, DoublevPartnersDrawerComponent> = new Map<string, DoublevPartnersDrawerComponent>();

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: DoublevPartnersDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): DoublevPartnersDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
