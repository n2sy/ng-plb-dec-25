import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComponent, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'plb-dec-25';

  changerTitle(newTitle: string) {
    this.title = newTitle;
  }
}
