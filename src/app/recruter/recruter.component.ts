import { Component, inject } from '@angular/core';
import { GestionRecruesService } from '../services/gestion-recrues.service';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-recruter',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './recruter.component.html',
  styleUrl: './recruter.component.css',
})
export class RecruterComponent {
  tabRecrues = [];
  private recureSer = inject(GestionRecruesService);

  ngOnInit() {
    this.tabRecrues = this.recureSer.getAllRecrues();
  }
}
