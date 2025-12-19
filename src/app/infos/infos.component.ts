import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/Candidat.model';
import { NoAvatarPipe } from '../pipes/no-avatar.pipe';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [RouterLink, NoAvatarPipe],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  candidatCible: Candidat;
  private actRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private candSer = inject(GestionCandidatsService);

  ngOnInit() {
    // 1ere méthode
    // this.candidatCible = this.candSer.getCandidatById(
    //   this.actRoute.snapshot.paramMap.get('id')
    // );
    this.candSer
      .getCandidatByIdAPI(this.actRoute.snapshot.paramMap.get('id'))
      .subscribe({
        next: (response: Candidat) => {
          this.candidatCible = response;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigateByUrl('/not-found');
        },
      });

    //2eme méthode
    // this.actRoute.paramMap.subscribe({
    //   next: (valeur: ParamMap) => {
    //     this.candidatID = valeur.get('id');
    //   },
    // error : (err) => {

    // },
    // complete : () => {

    // }
    // });
  }

  deleteHandler() {
    if (confirm('Etes-vous sûr de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidateAPI(this.candidatCible._id).subscribe({
        next: (response) => {
          alert('Candidat supprimé ave succès');
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
