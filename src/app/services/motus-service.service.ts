import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotusServiceService {

  constructor(private http : HttpClient) { }

  //récupèrer un mot aléatoire
  findWordRandom() : Observable<string>{
    return this.http.get<string>("http://localhost:12466/api/mots/");
  }

  //vérifier si un mot existe
  
}
