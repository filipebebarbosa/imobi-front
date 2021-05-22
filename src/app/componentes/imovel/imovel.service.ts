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
      verticalPosition: 'top',
      panelClass: ['msg-sucess']
    });
  }

  // @ts-ignore
  create(imovel: Imovel): Observable<Imovel> {
    return this.http.post<Imovel>(ImovelConstants.baseurl + ImovelConstants.imoveis, imovel);
  }

  cepRecovery(cep: number): Observable<any> {
    const url = `${ImovelConstants.viaCep}${cep}/json/`;
    return this.http.get<any>(url);
  }

  getListImoveis(): Observable<Imovel[]> {
    const url = `${ImovelConstants.baseurl}${ImovelConstants.imoveis}`;
    return this.http.get<Imovel[]>(url);
  }

  getImovelById(id: number): Observable<Imovel> {
    const url = `${ImovelConstants.baseurl}${ImovelConstants.imoveis}/${id}`;
    return this.http.get<Imovel>(url);
  }

  update(imovel: Imovel): Observable<Imovel> {
    const url = `${ImovelConstants.baseurl + ImovelConstants.imoveis}/${imovel.id}`;
    return this.http.put<Imovel>(url, imovel);
  }

  delete(id: number): Observable<Imovel> {
    const url = `${ImovelConstants.baseurl}${ImovelConstants.imoveis}/${id}`;
    return this.http.delete<Imovel>(url);
  }
}
