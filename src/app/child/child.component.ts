import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input({ required: true }) childColor: string = 'grey';

  @Output() eventToParent = new EventEmitter();

  emissionEvenement() {
    this.eventToParent.emit('Message de la part du Child Component');
  }
}
