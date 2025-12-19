import { Injectable } from '@angular/core';
import { Candidat } from '../models/Candidat.model';
import { FirstService } from './first.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  link = 'https://backendangulartrainingvercel.vercel.app/cv/candidats';
  private srcCandidates: Candidat[] = [
    new Candidat(1, 'simpson', 'bart', 29, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'simpson', 'homer', 54, 'Chef de projet', 'homer.png'),
    new Candidat(3, 'simpson', 'lisa', 23, 'designer', 'lisa.png'),
    new Candidat(4, 'jelassi', 'nidhal', 42, 'formateur'),
  ];
  constructor(private http: HttpClient) {}

  getAllCandidates() {
    return this.srcCandidates;
  }

  getAllCandidatesAPI() {
    return this.http.get(this.link);
  }

  getCandidatById(candidatId) {
    return this.srcCandidates.find((cand) => cand._id == candidatId);
  }

  getCandidatByIdAPI(candidatId) {
    return this.http.get(`${this.link}/${candidatId}`);
  }

  addCandidate(newCandidat) {
    newCandidat._id = crypto.randomUUID();
    this.srcCandidates.push(newCandidat);
  }

  addCandidateAPI(newCandidat) {
    return this.http.post(`${this.link}`, newCandidat);
  }

  updateCandidate(updatedCand) {
    let i = this.srcCandidates.findIndex(
      (element) => element._id == updatedCand._id
    );
    this.srcCandidates[i] = updatedCand;
  }
  updateCandidateAPI(updatedCand: Candidat) {
    return this.http.put(`${this.link}/${updatedCand._id}`, updatedCand);
  }
  deleteCandidate(candId) {
    let i = this.srcCandidates.findIndex((element) => element._id == candId);
    this.srcCandidates.splice(i, 1);
  }
  deleteCandidateAPI(candId) {
    return this.http.delete(`${this.link}/${candId}`);
  }

  uploadAvatar(formData: FormData) {
    return this.http.post(
      'https://backendangulartrainingvercel.vercel.app/images/upload/cloud',
      formData
    );
  }
}
