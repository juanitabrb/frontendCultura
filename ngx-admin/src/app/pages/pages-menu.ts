import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Eventos',
    icon: 'people-outline',
    link: '/pages/eventos/listar',
    home: true,
    children: [
      {
        title: 'Listar',
        link: '/pages/eventos/listar',
      },
      {
        title: 'Crear',
        link: '/pages/eventos/crear',
      },
    ]
  },
  {
    title: 'Usuarios',
    icon: 'people-outline',
    link: '/pages/usuarios/listar',
    children: [
      {
        title: 'Listar',
        link: '/pages/usuarios/listar',
      },
      {
        title: 'Crear',
        link: '/pages/usuarios/crear',
      },
    ]
  },
  {
    title: 'Sitios',
    icon: 'people-outline',
    link: '/pages/sitios',
    children: [
      {
        title: 'Listar',
        link: '/pages/sitios/listar',
      },
      {
        title: 'Crear',
        link: '/pages/sitios/crear',
      },
    ]
  },
  {
    title: 'Categorias',
    icon: 'people-outline',
    link: '/pages/categorias',
    children: [
      {
        title: 'Listar',
        link: '/pages/categorias/listar',
      },
      {
        title: 'Crear',
        link: '/pages/categorias/crear',
      },
    ]
  },

  {
    title: 'Agrupaciones',
    icon: 'people-outline',
    link: '/pages/agrupaciones',
    children: [
      {
        title: 'Listar',
        link: '/pages/agrupaciones/listar',
      },
      {
        title: 'Crear',
        link: '/pages/agrupaciones/crear',
      },

    ]
  },
  {
    title: 'Managers',
    icon: 'people-outline',
    link: '/pages/managers',
    children: [
      {
        title: 'Listar',
        link: '/pages/managers/listar',
      },
      {
        title: 'Crear',
        link: '/pages/managers/crear',
      },
    ]
  },
  {
    title: 'Contratos',
    icon: 'people-outline',
    link: '/pages/contratos',
    children: [
      {
        title: 'Listar',
        link: '/pages/contratos/listar',
      },
      {
        title: 'Crear',
        link: '/pages/contratos/crear',
      },
    ]
  },
  {
    title: 'Programaciones',
    icon: 'people-outline',
    link: '/pages/programaciones',
    children: [
      {
        title: 'Listar',
        link: '/pages/programaciones/listar',
      },
      {
        title: 'Crear',
        link: '/pages/programaciones/crear',
      },
    ]
  }
];
