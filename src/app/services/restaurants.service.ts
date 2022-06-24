import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantModel } from '../models/restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private restaurantsUrl: string = 'https://mocki.io/v1/c4c37299-5a11-428c-9848-16fd7332d768';
  constructor(
    private http: HttpClient
  ) { }

  getRestaurants(): Observable<RestaurantModel[]> {
    return this.http.get<RestaurantModel[]>(this.restaurantsUrl)
  }

  getRestaurant(id: number): Observable<RestaurantModel> {
    return this.http.get<RestaurantModel>(`${this.restaurantsUrl}/${id}`)
  }
}
