import { Injectable } from '@angular/core';
import { Candidat } from '../models/Candidat.model';

@Injectable()
export class GestionRecruesService {
  private allRecrues: Candidat[] = [];
  constructor() {}

  getAllRecrues() {
    return this.allRecrues;
  }

  addRecrue(newRecrue) {
    if (this.allRecrues.indexOf(newRecrue) == -1)
      this.allRecrues.push(newRecrue);
    else alert('Ce candidat a déjà été recruté !');
  }
}
