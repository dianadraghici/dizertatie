import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model";
import {UserService} from "../user/user.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

    users: User[];
    constructor(private userService: UserService) { }

  ngOnInit(){
      this.userService.getUsers()
          .subscribe( data => {
              this.users = data;
          });
  }
}
