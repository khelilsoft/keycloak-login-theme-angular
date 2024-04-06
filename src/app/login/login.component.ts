import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { Message } from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginFormHTMLElement', {read : ElementRef, static : true}) loginFormHTMLElement!: ElementRef;
  loginForm: UntypedFormGroup;
  loginTitle: string = 'Sign in to your account';
  errorMessage: string = '';
  username!: string;
  password!: string;
  messages: Message[] | undefined;

  constructor(private fb: UntypedFormBuilder) {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.errorMessage = (window as { [key: string]: any })["usernameOrPasswordError"] as string;
  }

  onSubmit(): void {
    const htmlFormElement = this.loginFormHTMLElement.nativeElement;
    let actionUrl = (window as { [key: string]: any })["loginAction"] as string;
    actionUrl = actionUrl.replace( /&amp;/g, '&');
    htmlFormElement.action = actionUrl;
    htmlFormElement.submit();
  }

}
