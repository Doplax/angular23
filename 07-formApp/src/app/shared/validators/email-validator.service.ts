import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidator implements AsyncValidator {
  validate( control: AbstractControl ): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {
      console.log({email})

      if( email === "doplax@gmail.com") {
        subscriber.next({ emailTaken: true });
        subscriber.complete();
      }

      subscriber.next(null);
      subscriber.complete();
    }).pipe(
      delay(3000) // Simula un retraso de 3 segundos para la llamada HTTP
    );

    return httpCallObservable;

    //return of({ emailTaken: true }).pipe(delay(3000));// Simula una llamada a un servicio que verifica si el email ya está en uso
  }

  //registerOnValidatorChange?(fn: () => void): void {
  //  throw new Error('Method not implemented.');
  //}
}
