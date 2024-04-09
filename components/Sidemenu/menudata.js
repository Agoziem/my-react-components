export const sidebarData = [
    {
        label: 'Home',
        icon: 'home',
        path: '/'
    },
    {
        label: 'About',
        icon: 'about',
        path: '/about'
    },
    {
        label: 'Services',
        icon: 'services',
        children : [
            {
                label: 'Service 1',
                path: '/service1'
            },
            {
                label: 'Service 2',
                path: '/service2'
            },
            {
                label: 'Service 3',
                path: '/service3'
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'contact',
        path: '/contact'
    },
    {
        label: 'Settings',
        icon: 'settings',
        children : [
            {
                label: 'Setting 1',
                path: '/setting1'
            },
            {
                label: 'Setting 2',
                path: '/setting2'
            },
            {
                label: 'Setting 3',
                path: '/setting3'
            }
        ]
    }
]