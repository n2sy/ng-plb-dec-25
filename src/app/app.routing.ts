import { Routes } from '@angular/router';
import { allowGuard } from './guards/allow.guard';

// lazy loading --> 100
export let myRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./accueil/accueil.component').then((c) => c.AccueilComponent),
  },
  {
    path: 'cv',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./cv/cv.component').then((c) => c.CvComponent),
      },
      {
        path: 'add',
        loadComponent: () =>
          import('./add/add.component').then((c) => c.AddComponent),
        canActivate: [allowGuard],
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./infos/infos.component').then((c) => c.InfosComponent),
          },
          {
            path: 'edit',
            loadComponent: () =>
              import('./edit/edit.component').then((c) => c.EditComponent),
            canActivate: [allowGuard],
          },
        ],
      },
    ],
  },
  {
    path: 'servers',
    loadComponent: () =>
      import('./manage-servers/manage-servers.component').then(
        (c) => c.ManageServersComponent
      ),
  },
  {
    path: 'accounts',
    loadComponent: () =>
      import('./accounts/home-accounts/home-accounts.component').then(
        (c) => c.HomeAccountsComponent
      ),
  },
  {
    path: 'direct',
    loadComponent: () =>
      import('./direct/direct.component').then((c) => c.DirectComponent),
  },
  {
    path: 'react',
    loadComponent: () =>
      import('./react/react.component').then((c) => c.ReactComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
  { path: '**', redirectTo: 'not-found' }, // Wild route
];

// Lazy Loading ---> 0
// export let myRoutes: Routes = [
//   { path: '', component: AccueilComponent },
//   { path: 'cv', component: CvComponent },
//   { path: 'cv/add', component: AddComponent },
//   { path: 'cv/:id', component: InfosComponent },
//   { path: 'cv/:id/edit', component: EditComponent },
//   { path: 'servers', component: ManageServersComponent },
//   { path: 'accounts', component: HomeAccountsComponent },
//   { path: 'direct', component: DirectComponent },
//   { path: 'not-found', component: NotFoundComponent },
//   { path: '**', redirectTo: 'not-found' }, // Wild route
// ];
