import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  candidatID;
  private actRoute = inject(ActivatedRoute);

  ngOnInit() {
    // 1ere méthode
    this.candidatID = this.actRoute.snapshot.paramMap.get('id');

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
