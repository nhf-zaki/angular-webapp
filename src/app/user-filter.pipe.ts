import {Pipe, PipeTransform} from '@angular/core';
import {User} from './user';

@Pipe({
  name: 'userFilter',
  pure: false
})
export class UserFilterPipe implements PipeTransform {

  transform(users: User[], searchText: string): any {
    if (!users || !searchText) {
      return users;
    }
    searchText = searchText.toLowerCase();

    return users.filter((user) => {
      return JSON.stringify(user).toLowerCase().includes(searchText);
    });
  }

}
