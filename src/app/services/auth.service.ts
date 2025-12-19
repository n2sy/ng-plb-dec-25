import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'https://backendangulartrainingvercel.vercel.app/auth';

  constructor(private http: HttpClient) {}

  seConnecter(identifiants) {
    return this.http.post(`${this.link}/login`, identifiants);
  }

  inscription(identifiants) {
    return this.http.post(`${this.link}/register`, identifiants);
  }

  seDeconnecter() {}

  estConnecte() {
    let token = localStorage.getItem('access_token');
    if (token) return true;
    return false;
  }
}
