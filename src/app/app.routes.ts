import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: "/principal",
    pathMatch: 'full', //Se deberia de autilizar solo, pero no lo hace
  },
  {
    path: 'navegacion',
    loadComponent: () => import('./pagesFamily/nav/nav.component')
  },
  {
    path: 'principal',
    loadComponent: () => import('./pagesFamily/principal/principal.component')
  },
  {
    path: 'alexander',
    loadComponent: () => import('./pagesFamily/i-alexander/i-alexander.component')
  },
  {
    path: 'brother-in-law',
    loadComponent: () =>
      import('./pagesFamily/brother-in-law/brother-in-law.component'),
  },
  {
    path: 'brother-oldest',
    loadComponent: () =>
      import('./pagesFamily/brother-oldest/brother-oldest.component'),
  },
  {
    path: 'brother-youngest',
    loadComponent: () =>
      import('./pagesFamily/brother-youngest/brother-youngest.component'),
  },
  {
    path: 'father',
    loadComponent: () => import('./pagesFamily/father/father.component'),
  },
  {
    path: 'mother',
    loadComponent: () => import('./pagesFamily/mother/mother.component'),
  },
  {
    path: 'nephew',
    loadComponent: () => import('./pagesFamily/nephew/nephew.component'),
  },
  {
    path: 'sister',
    loadComponent: () => import('./pagesFamily/sister/sister.component'),
  },
];
