import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  
  message: string = "Vous êtes déconnecté.";
  name: string;
  password: string;
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage(): void {
      if (this.authService.isLoggedIn) {
        this.message = "Vous êtes connecté";
      } else {
        this.message = "Identifiant ou mot de passe incorrects";
      }
  }

  login(): void {
    this.message = "Tentative de connexion en cours...";
    this.authService.login(this.name, this.password).subscribe(
      (isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(['/pokemons'])
        } else {
          this.password = "";
          this.router.navigate(['/login'])
        }
    
      }
    )
  }

  logout(): void {
    this.authService.logout();
    this.message = "Vous êtes déconnecté.";
  }
}
