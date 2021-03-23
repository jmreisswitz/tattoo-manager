import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-form-page',
  templateUrl: './login-form-page.component.html',
  styleUrls: ['./login-form-page.component.css'],
})
export class LoginFormPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.userid = '';
  }

  userid: string | null;

  ngOnInit(): void {
    this.userid = this.route.snapshot.paramMap.get('userid');
  }
}
