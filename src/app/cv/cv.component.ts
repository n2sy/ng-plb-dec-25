import { Component } from '@angular/core';
import { ListeComponent } from '../liste/liste.component';
import { DetailsComponent } from '../details/details.component';
import { Candidat } from '../models/Candidat.model';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  allCandidates: Candidat[] = [
    new Candidat(1, 'simpson', 'bart', 29, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'simpson', 'homer', 54, 'Chef de projet', 'homer.png'),
    new Candidat(3, 'simpson', 'lisa', 23, 'designer', 'lisa.png'),
  ];

  selectedCandidate: Candidat;

  recupererCandidatClicke(cand: Candidat) {
    this.selectedCandidate = cand;
    console.log(this.selectedCandidate);
  }
}
