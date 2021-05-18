export const menu = [
  // single item
  {
    id: 1,
    icon: '<i class="bx bx-home"></i>',
    title: 'Dashboard',
    route: '/',
    sub_items: undefined,
  },
  // multi-level item
  {
    id: 2,
    icon: '<i class="bx bx-user-pin"></i>',
    title: 'Role Management',
    route: undefined,
    sub_items: [
      {
        icon: '<i class="bx bx-user-voice"></i>',
        title: 'Permissions',
        route: '/role/permission',
        sub_items: undefined,
      },
      {
        icon: '<i class="bx bx-user-x"></i>',
        title: 'Roles',
        route: '/role',
        sub_items: undefined,
      },
      {
        icon: '<i class="bx bx-user-plus"></i>',
        title: 'Assign R-T-P',
        route: '/role/assign-role-permission',
        sub_items: undefined,
      },
    ],
  },
  {
    icon: '<i class="bx bxs-user-detail"></i>',
    title: 'Accounts',
    route: undefined,
    sub_items: [
      {
        icon: '<i class="bx bxs-user-badge"></i>',
        title: 'Admin Account',
        route: undefined,
        sub_items: undefined,
      },
      {
        icon: '<i class="bx bxs-user-pin"></i>',
        title: 'User Account',
        route: undefined,
        sub_items: undefined,
      },
    ],
  },
  // single item
  {
    id: 3,
    icon: '<i class="bx bx-grid-alt"></i>',
    title: 'Protocols',
    route: '/protocol',
    sub_items: undefined,
  },
  {
    id: 4,
    icon: '<i class="bx bx-file"></i>',
    title: 'Templates',
    route: '/template',
    sub_items: undefined,
  },
]
