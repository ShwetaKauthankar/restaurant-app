import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.usersUrl)
  }

  getUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.usersUrl}/${id}`)
  }
}