import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from '../models/recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private usersEndpoint: string = 'http://localhost:8081/api/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllRecipes(): Observable<any> {
    return this.http.get(this.usersEndpoint, this.httpOptions);
  }

  getSingleRecipe(Id): Observable<any> {
    return this.http.get(this.usersEndpoint + Id, this.httpOptions);
  }

  getByCategory(category): Observable<any> {
    return this.http.get(this.usersEndpoint + category, this.httpOptions);
  }

  getByDifficulty(difficulty): Observable<any> {
    return this.http.get(this.usersEndpoint + difficulty, this.httpOptions);
  }
  constructor(private http: HttpClient) { }
}
