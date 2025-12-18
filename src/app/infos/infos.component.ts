import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
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
  private candSer = inject(GestionCandidatsService);

  ngOnInit() {
    // 1ere méthode
    this.candidatCible = this.candSer.getCandidatById(
      this.actRoute.snapshot.paramMap.get('id')
    );

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
}
