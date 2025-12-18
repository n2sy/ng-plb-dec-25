import { Injectable } from '@angular/core';
import { GestionCandidatsService } from './gestion-candidats.service';

@Injectable()
export class FirstService {
  constructor(private gestionCandidats: GestionCandidatsService) {}

  afficherSalut() {
    console.log('Salut ! Je suis le First Service');
    console.log(this.gestionCandidats.getAllCandidates());
  }
}
