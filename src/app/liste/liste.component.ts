import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Candidat } from '../models/Candidat.model';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
})
export class ListeComponent {
  @Input() tabCandidats: Candidat[] = [];
  @Output() eventToCv = new EventEmitter();
  sendCandidateToCv(cand: Candidat) {
    this.eventToCv.emit(cand);
  }
}
