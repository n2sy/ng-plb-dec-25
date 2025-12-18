import { Injectable } from '@angular/core';
import { Candidat } from '../models/Candidat.model';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private srcCandidates: Candidat[] = [
    new Candidat(1, 'simpson', 'bart', 29, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'simpson', 'homer', 54, 'Chef de projet', 'homer.png'),
    new Candidat(3, 'simpson', 'lisa', 23, 'designer', 'lisa.png'),
    new Candidat(4, 'jelassi', 'nidhal', 42, 'formateur'),
  ];
  constructor() {}

  getAllCandidates() {
    return this.srcCandidates;
  }

  addCandidate() {
    this.srcCandidates.push(
      new Candidat(5, 'NEW', 'CANDIDATE', 29, 'ingénieur', 'bart.jpeg')
    );
  }
}
