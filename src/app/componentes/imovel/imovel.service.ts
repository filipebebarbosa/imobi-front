import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http';
import {Imovel} from '../../views/imoveis-crud/imovel.model';
import {ImovelConstants} from './imovel.constants';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  // @ts-ignore
  create(imovel: Imovel): Observable<Imovel> {
    return this.http.post<Imovel>(ImovelConstants.baseurl + ImovelConstants.produtos, imovel);
  }

}
