import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Candidat } from '../models/Candidat.model';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
  // providers: [GestionCandidatsService],
})
export class ListeComponent {
  //   @Input() tabCandidats: Candidat[] = [];
  tabCandidats: Candidat[] = [];
  @Output() eventToCv = new EventEmitter();

  private candSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.candSer.getAllCandidatesAPI().subscribe({
      next: (response: Candidat[]) => {
        this.tabCandidats = response;
      },
      error: (err) => {
        alert(
          'Connexion impossible... Chargement des données fictives en cours'
        );
        this.tabCandidats = this.candSer.getAllCandidates();
      },
    });
  }
  sendCandidateToCv(cand: Candidat) {
    this.eventToCv.emit(cand);
  }
  showCandidatesList() {
    console.log(this.candSer.getAllCandidates());
  }
}
