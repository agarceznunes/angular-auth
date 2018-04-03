import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../_services/user.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-register',
  moduleId: module.id,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  currentUser: User;
  admin: boolean = false;
  
  constructor(private router: Router, private userService: UserService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser != null){
      this.admin = this.currentUser.admin;
    }
  }

  ngOnInit() {
    console.log(this.currentUser);
  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          //this.alertService.success('Registration successful', true);
          this.router.navigate(['../']);
        },
        error => {
          //this.alertService.error(error);
          this.loading = false;
        });
    }
}

