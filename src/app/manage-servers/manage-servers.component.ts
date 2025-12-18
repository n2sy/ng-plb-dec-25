import {
  DatePipe,
  NgClass,
  TitleCasePipe,
  UpperCasePipe,
  CurrencyPipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { ShortPipe } from '../pipes/short.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-servers',
  standalone: true,
  imports: [
    NgClass,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    ShortPipe,
    FilterPipe,
    FormsModule,
  ],
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
  allServers = [
    {
      nom: 'Production Server',
      type: 'small',
      date_d: new Date(2024, 5, 6),
      statut: 'critical',
    },
    {
      nom: 'Development Test Server',
      type: 'medium',
      date_d: new Date(2026, 5, 6),
      statut: 'stable',
    },
    {
      nom: 'Testing Development Server',
      type: 'small',
      date_d: new Date(2024, 5, 6),
      statut: 'offline',
    },
    {
      nom: 'Nidhal Server',
      type: 'large',
      date_d: new Date(2024, 5, 6),
      statut: 'stable',
    },
  ];
  selectedStatus: string = '';

  affecterClasse(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
