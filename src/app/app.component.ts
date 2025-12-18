import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { DirectComponent } from './direct/direct.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FirstComponent,
    ChildComponent,
    CvComponent,
    HomeAccountsComponent,
    DirectComponent,
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
