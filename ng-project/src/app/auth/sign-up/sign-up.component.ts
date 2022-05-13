import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpDto = {
    email: '',
    password: '',
  };
  constructor() {}
  onSubmit() {
    alert(JSON.stringify(this.signUpDto));
  }

  ngOnInit(): void {}
}
