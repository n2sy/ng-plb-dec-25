import { Component, inject, Input } from '@angular/core';
import { Candidat } from '../models/Candidat.model';
import { NoAvatarPipe } from '../pipes/no-avatar.pipe';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NoAvatarPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() selCandidate: Candidat;

  private recrueSer = inject(GestionRecruesService);

  recruterHandler() {
    this.recrueSer.addRecrue(this.selCandidate);
  }
}
