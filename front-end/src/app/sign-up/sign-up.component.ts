
import {
  Component,
  OnInit
} from '@angular/core';
import {
  AuthService
} from '../services/auth.service';
import {
  Router
} from '@angular/router';
import {
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  creatuserData: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {

    this.creatuserData = {
      email: form.value["email"],
      username: form.value["username"],
      password: form.value["password"],
      prenom: form.value["prenom"],
      nom: form.value["nom"]
    };
    this.authService.createUser(this.creatuserData)
}
}
