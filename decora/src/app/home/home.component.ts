import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = []; 	

  constructor(private userService: UserService) {
  	this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  	this.loadAllUsers();
  	//console.log(localStorage);	
  }

  deleteUser(id: number) {
  	this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
  	this.userService.getAll().subscribe(users => { this.users = users; });
  }

}