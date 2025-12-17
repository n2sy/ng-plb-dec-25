import { Component, Input } from '@angular/core';
import { Candidat } from '../models/Candidat.model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() unCandidat: Candidat;
}
