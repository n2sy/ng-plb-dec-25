import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { DirectComponent } from './direct/direct.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { RecruterComponent } from './recruter/recruter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FirstComponent,
    ChildComponent,
    CvComponent,
    HomeAccountsComponent,
    DirectComponent,
    ManageServersComponent,
    RecruterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'plb-dec-25';

  changerTitle(newTitle: string) {
    this.title = newTitle;
  }
}
