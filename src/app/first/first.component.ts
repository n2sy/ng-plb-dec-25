import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first.component.html',
  // styleUrl: './first.component.css'
})
export class FirstComponent {
  formation: string = 'PLB';
  annee: number = 2025;

  couleur: string = 'green';

  hd: boolean = false;

  clickHandler() {
    alert("J'ai été cliqué");
  }

  //   changerFormation(inp: any) {
  //     console.log(inp);
  //   }
  changerFormation(newFormationValue: string) {
    this.formation = newFormationValue;
  }
}
