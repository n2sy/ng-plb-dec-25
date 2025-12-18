import { Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { DirectComponent } from './direct/direct.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InfosComponent } from './infos/infos.component';

export let myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: InfosComponent },
  { path: 'servers', component: ManageServersComponent },
  { path: 'accounts', component: HomeAccountsComponent },
  { path: 'direct', component: DirectComponent },
];
