import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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

  showLogin = true;
  showError = false;

  private authSer = inject(AuthService);
  private router = inject(Router);
  submitHandler(f: NgForm) {
    if (this.showLogin) {
      this.authSer.seConnecter(f.value).subscribe({
        next: (response) => {
          alert(response['message']);
          localStorage.setItem('access_token', response['token']);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          this.showError = true;
          f.setValue({
            email: '',
            password: '',
          });
          // ou f.reset();
        },
      });
    } else {
      this.authSer.inscription(f.value).subscribe({
        next: (response) => {
          alert(response['message']);
          this.toggleShowLogin();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  toggleShowLogin() {
    this.showLogin = !this.showLogin;
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
