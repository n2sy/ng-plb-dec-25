import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/Candidat.model';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  candidateToEdit: Candidat;
  private actRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private candSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.candSer
      .getCandidatByIdAPI(this.actRoute.snapshot.paramMap.get('id'))
      .subscribe({
        next: (response: Candidat) => {
          this.candidateToEdit = response;
        },
        error: (err) => {
          this.router.navigateByUrl('/not-found');
        },
      });
  }

  submitHandler(fValue) {
    fValue._id = this.candidateToEdit._id;
    this.candSer.updateCandidateAPI(fValue).subscribe({
      next: (response) => {
        alert('Candidat a été bien mis à jour');
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
