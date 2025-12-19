import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-react',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './react.component.html',
  styleUrl: './react.component.css',
})
export class ReactComponent {
  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl('nidhal', Validators.required),
      addrMail: new FormControl('', [Validators.required, Validators.email]),
      skills: new FormArray([]),
    });
  }

  get formSkills() {
    return <FormArray>this.signUpForm.get('skills');
  }

  addSkill() {
    let ctrl = new FormControl('', Validators.required);
    this.formSkills.push(ctrl);
  }

  submitHandler() {
    console.log(this.signUpForm.value);
  }
}
