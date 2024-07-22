import { Injectable } from '@angular/core';
import { DarkanTechnologiesDrawerComponent } from '@darkantechnologies/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root'
})
export class DarkanTechnologiesDrawerService
{
    private _componentRegistry: Map<string, DarkanTechnologiesDrawerComponent> = new Map<string, DarkanTechnologiesDrawerComponent>();

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
    registerComponent(name: string, component: DarkanTechnologiesDrawerComponent): void
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
    getComponent(name: string): DarkanTechnologiesDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
