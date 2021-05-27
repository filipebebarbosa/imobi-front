import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Imovel} from '../../views/imoveis-crud/imovel.model';
import {ImovelConstants} from './imovel.constants';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {MenssagensComponent} from '../menssagens/menssagens.component';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  constructor(private http: HttpClient, private menssagesComponent: MenssagensComponent) {
  }

  // @ts-ignore
  create(imovel: Imovel): Observable<Imovel> {
    return this.http.post<Imovel>(ImovelConstants.baseurl + ImovelConstants.imoveis, imovel).pipe(
      map(obj => obj),
      catchError((e => this.menssagesComponent.errorHandler(e))));
  }

  cepRecovery(cep: number): Observable<any> {
    const url = `${ImovelConstants.viaCep}${cep}/json/`;
    return this.http.get<any>(url).pipe(
      map(obj => obj),
      catchError((e => this.menssagesComponent.errorHandler('Ops! Erro ao buscar o cep!'))));
  }

  getListImoveis(): Observable<Imovel[]> {
    const url = `${ImovelConstants.baseurl}${ImovelConstants.imoveis}`;
    return this.http.get<Imovel[]>(url).pipe(
      map(obj => obj),
      catchError((e => this.menssagesComponent.errorHandler(e))));
  }

  getImovelById(id: number): Observable<Imovel> {
    const url = `${ImovelConstants.baseurl}${ImovelConstants.imoveis}/${id}`;
    return this.http.get<Imovel>(url).pipe(
      map(obj => obj),
      catchError((e => this.menssagesComponent.errorHandler(e))));
  }

  update(imovel: Imovel): Observable<Imovel> {
    const url = `${ImovelConstants.baseurl + ImovelConstants.imoveis}/${imovel.id}`;
    return this.http.put<Imovel>(url, imovel).pipe(
      map(obj => obj),
      catchError((e => this.menssagesComponent.errorHandler('Erro ao alterar o imóvel!'))));
  }

  delete(id: number): Observable<Imovel> {
    const url = `${ImovelConstants.baseurl}${ImovelConstants.imoveis}/${id}`;
    return this.http.delete<Imovel>(url).pipe(
      map(obj => obj),
      catchError((e => this.menssagesComponent.errorHandler('Erro ao deletar o imóvel!'))));
  }
}
