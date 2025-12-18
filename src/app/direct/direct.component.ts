import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './direct.component.html',
  styleUrl: './direct.component.css',
})
export class DirectComponent {
  bgColor = 'yellow';
  font = 'Phosphate';
  size = '40px';

  class1 = true;
  class2 = false;
  class3 = false;

  switchClass() {
    if (this.class1) {
      this.class1 = false;
      this.class2 = true;
    } else if (this.class2) {
      this.class3 = true;
      this.class2 = false;
    } else if (this.class3) {
      this.class3 = false;
      this.class1 = true;
    }
  }
}
