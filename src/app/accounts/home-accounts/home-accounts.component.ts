import { Component } from '@angular/core';
import { AddAccountComponent } from '../add-account/add-account.component';
import { ItemAccountComponent } from '../item-account/item-account.component';

@Component({
  selector: 'app-home-accounts',
  standalone: true,
  imports: [AddAccountComponent, ItemAccountComponent],
  templateUrl: './home-accounts.component.html',
  styleUrl: './home-accounts.component.css',
})
export class HomeAccountsComponent {
  allAccounts = [
    {
      name: 'Mohamed Account',
      status: 'active',
    },
    {
      name: 'Slim Account',
      status: 'inactive',
    },
  ];
}
