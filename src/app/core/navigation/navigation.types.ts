import { DarkanTechnologiesNavigationItem } from '@darkantechnologies/components/navigation';

export class Navigation {
    compact: DarkanTechnologiesNavigationItem[];
    default: DarkanTechnologiesNavigationItem[];
    futuristic: DarkanTechnologiesNavigationItem[];
    horizontal: DarkanTechnologiesNavigationItem[];

    constructor() {
        this.compact = [];
        this.default = [];
        this.futuristic = [];
        this.horizontal = [];
    }
}

export const defaultNavigation: DarkanTechnologiesNavigationItem[] = [
    {
        id  : 'divider-1',
        type: 'divider'
    },
    {
        id      : 'dashboards',
        title   : 'PANEL DE CONTROL',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dashboards.alphraglamouria',
                title: 'Usuarios',
                type : 'basic',
                icon : 'heroicons_solid:users',
                link : '/dashboards/alphraglamouria'
            },
            {
                id   : 'pages.last-news',
                title: 'Last News',
                type : 'basic',
                icon : 'mat_solid:fiber_new',
                link : '/pages/last-news'
            }
        ]
    }
];

export const horizontalNavigation: DarkanTechnologiesNavigationItem[] = [
    {
        id      : 'usuarios',
        title   : 'Usuarios',
        type    : 'basic',
        icon    : 'heroicons_solid:users',
        link    : '/dashboards/alphraglamouria'
        // children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'last-news',
        title   : 'Last News',
        type    : 'basic',
        icon    : 'mat_solid:fiber_new',
        link    : '/pages/last-news'
    }
];
