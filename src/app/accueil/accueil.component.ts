import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ExpObsComponent } from '../exp-obs/exp-obs.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterLink, ExpObsComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  private router = inject(Router);

  private http = inject(HttpClient);

  goToCv() {
    this.router.navigateByUrl('cv');
  }

  goToAccounts() {
    this.router.navigate(['accounts']);
  }

  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
