import { Component, OnInit } from '@angular/core';
// import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { takeUntil, Subject, catchError } from 'rxjs';
import { Message } from 'primeng/api';
import { LayoutService } from '../../layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  messages: Message[] | undefined;
  private ngUnsubscribe = new Subject();

  constructor(
    public layoutService: LayoutService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(){
    // if (this.authService.user){
    //   this.router.navigate(['/']);
    // }
  }
  ngOnDestroy(): void {
    // this.ngUnsubscribe.complete();
  }

  login() {
  //   this.authService
  //     .login(this.username, this.password)
  //     .pipe(
  //       takeUntil(this.ngUnsubscribe),
  //       catchError((error) => {
  //         switch (error.status) {
  //           case 403:
  //             console.error('Identifiants incorrects');
  //             this.messages = [{ severity: 'error', summary: 'Erreur', detail: 'Identifiants incorrects' }];
  //             break;
  //           default:
  //             console.error('Erreur de connexion');
  //             this.messages = [{ severity: 'error', summary: 'Erreur', detail: 'Erreur de connexion' }];
  //             break;
  //         }
  //         return [];
  //       })
  //     )
  //     .subscribe(() => {
  //       const redirectUrl = this.authService.redirectUrl || '/';
  //       this.router.navigate([redirectUrl]);
  //     });
  }
}
