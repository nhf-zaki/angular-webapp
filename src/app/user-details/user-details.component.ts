import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  username: any;
  users: any = [];
  usernameSearchText: any;

  constructor(private service: UserService) {
    service.printToConsole('Get Service');
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.service.getUsersList()
      .subscribe((data: {}) => {
        console.log(data);
        this.users = data;
      });
  }

  private searchUser() {
    this.service.getUsersByUsername(this.username)
      .subscribe(users => this.users = users);
  }

  onSubmit() {
    this.searchUser();
  }

}
