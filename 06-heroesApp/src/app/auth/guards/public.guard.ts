import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { map, Observable, tap } from "rxjs";
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class PublicGuard implements CanMatch, CanActivate{
  constructor(
    private authService:AuthService,
    private router: Router
  ) { }

  private ceckAuthenticationStatus(): Observable<boolean> {
    return this.authService.checkAuthentication()
      .pipe(
        tap( isAuthenticated => {
          if (isAuthenticated) {
            this.router.navigate(['./']);
          }
        }),
        map( isAuthenticated => !isAuthenticated), // <-- devuelve true si no hay un usuario, false si hay
      )
  }

  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    //console.log('canMatch');
    //console.log({ route, segments });
    return true;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    console.log('canActivate');
    console.log({route, state});
    return this.ceckAuthenticationStatus();
    ;
  }
}