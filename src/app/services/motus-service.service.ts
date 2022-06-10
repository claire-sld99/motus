import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MotusServiceService {

  constructor(private http : HttpClient) { }

  //récupèrer un mot aléatoire
  findWordRandom() : Observable<string[]>{
    return this.http.get<string[]>(`${environment.apiUrl}/words`);
  }

  //vérifier si un mot existe
  isWordInList(word: string) : Observable<boolean>{
    return this.http.get<boolean>(`${environment.apiUrl}/words/${word}`);
  }
}
