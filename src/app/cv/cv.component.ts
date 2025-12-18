import { Component, inject } from '@angular/core';
import { ListeComponent } from '../liste/liste.component';
import { DetailsComponent } from '../details/details.component';
import { Candidat } from '../models/Candidat.model';
import { FirstService } from '../services/first.service';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  providers: [FirstService],
})
export class CvComponent {
  allCandidates: Candidat[] = [];

  selectedCandidate: Candidat;

  //1ere manière d'injecter un service
  //constructor(private firstSer: FirstService) {}

  //2eme manière d'injecter un service
  private firstSer = inject(FirstService);
  private candidatSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.firstSer.afficherSalut();
    this.allCandidates = this.candidatSer.getAllCandidates();
  }

  recupererCandidatClicke(cand: Candidat) {
    this.selectedCandidate = cand;
    console.log(this.selectedCandidate);
  }

  addNewCandidate() {
    this.candidatSer.addCandidate();
  }

  showCandidatesList() {
    console.log(this.candidatSer.getAllCandidates());
  }
}
