import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  standalone: true,
  imports: [],
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css',
})
export class AddAccountComponent {
  allOptions = ['', 'active', 'inactive', 'unknown'];
  @Output() eventToHome = new EventEmitter<{ name: string; status: string }>();

  //   accountName = '';
  //   accountStatus = '';

  addAccount(nameInput, statusSelect) {
    this.eventToHome.emit({
      name: nameInput.value,
      status: statusSelect.value,
    });
    nameInput.value = '';
    statusSelect.value = '';
  }
}
