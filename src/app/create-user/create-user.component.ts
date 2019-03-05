import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  createdUser: any;
  submitted = false;

  constructor(private service: UserService) {
    service.printToConsole('Get Service');
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.submitted = true;
    this.save();
    this.ngOnInit();
  }

  save() {
    this.service.createUser(this.user)
      .subscribe(
        (res: {}) => {
          this.createdUser = res;
          console.log(res);
        },
        error1 => console.log(error1)
      );
  }

}
