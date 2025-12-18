import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  languages = ['', 'java', 'python', 'php'];
  defaultLanguage = 'php';

  monCommentaire = 'Rien à signaler...';
  submitHandler(f) {
    console.log(f);
  }

  genererMotDePasse(f: NgForm) {
    f.form.patchValue({
      password: 'motdepasse123',
    });
    // f.setValue({
    //   email: '',
    //   password: 'motdepasse123',
    //   langage: '',
    //   comment: '',
    //   exemple: '',
    // });
  }

  resetForm(f: NgForm) {
    f.reset();
  }
}
