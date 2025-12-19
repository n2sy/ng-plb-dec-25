import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  private candSer = inject(GestionCandidatsService);
  private router = inject(Router);
  submitHandler(fValue, e) {
    //console.log(e.target[4].files[0]);
    let formData = new FormData();
    formData.set('avatar', e.target[4].files[0]);

    this.candSer.uploadAvatar(formData).subscribe({
      next: (response) => {
        fValue.avatar = response['url'];
        this.candSer.addCandidateAPI(fValue).subscribe({
          next: (data) => {
            alert('Candidat ajouté avec succès');
            this.router.navigateByUrl('/cv');
          },
          error: (err) => {
            console.log("Erreur avec l'ajout d'un candidat");
          },
        });
      },
    });

    // this.candSer.addCandidate(fValue);
  }
}
