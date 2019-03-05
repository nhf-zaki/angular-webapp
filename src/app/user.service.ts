import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

const endpoint = 'http://localhost:8080/api/users';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  responseType: 'text' as 'text'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  printToConsole(msg: any) {
    console.log(msg);
  }

  getUsersList(): Observable<any> {
    return this.http.get(endpoint);
  }

  getUsersByUsername(username: any): Observable<any> {
    return this.http.get(endpoint + '/' + username);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(endpoint + '/create', user, httpOptions);
  }
}
