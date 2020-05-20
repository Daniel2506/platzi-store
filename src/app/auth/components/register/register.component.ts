import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  hidePswd = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }


  getErrorMessage() {
  }

  register(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      const value = this.form.value;

      this.authService.register(value.email, value.password)
        .then(() => {
          this.router.navigate(['auth/login']);
        });
    }
  }

}
