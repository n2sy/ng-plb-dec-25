import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/Candidat.model';
import { NoAvatarPipe } from '../pipes/no-avatar.pipe';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NoAvatarPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() unCandidat: Candidat;
  @Output() eventToListe = new EventEmitter<Candidat>();

  sendCandidateToListe() {
    this.eventToListe.emit(this.unCandidat);
  }
}
