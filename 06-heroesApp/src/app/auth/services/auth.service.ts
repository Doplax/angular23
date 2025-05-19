import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl = environments.baseURL;
  private user?: User; // Esta como private para que no se pueda acceder desde fuera de la clase

  constructor(private http: HttpClient) { }

  public get currentUser(): User | undefined{
    if (!this.user) return undefined;
    return structuredClone(this.user); // Esto es para evitar que se modifique el objeto original
  }

  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap( user => { this.user = user;}),
      tap( user => { localStorage.setItem('token', 'aaaa.bbbb.cccc');
      })
    );
  }

  logout(): void {
    this.user = undefined;
    localStorage.clear(); // Elimina todo lo que hayamos guardado en esta aplicación
  }

}