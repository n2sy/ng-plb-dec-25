import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input({ required: true }) childColor: string = 'grey';
}
