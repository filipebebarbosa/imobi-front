import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EMPTY, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenssagensComponent {

  constructor(private snackBar: MatSnackBar) {
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  }

  errorHandler(msg: any): Observable<any> {
    this.showMessage(msg, true);
    return EMPTY;
  }
}
