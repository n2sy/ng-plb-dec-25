import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  standalone: true,
  imports: [],
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
}
