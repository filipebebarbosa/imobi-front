import {Component, OnInit} from '@angular/core';
import {ImovelService} from '../imovel.service';
import {Imovel} from '../../../views/imoveis-crud/imovel.model';
import {Router} from '@angular/router';
import {MenssagensComponent} from '../../menssagens/menssagens.component';

@Component({
  selector: 'app-imovel-create',
  templateUrl: './imovel-create.component.html',
  styleUrls: ['./imovel-create.component.scss']
})
export class ImovelCreateComponent implements OnInit {

  imovel: Imovel = {
    cep: null,
    logradouro: '',
    numero: null,
    complemento: '',
    bairro: '',
    quartos: null,
    valorAluguel: null,
    localidade: '',
    situacao: '',
    uf: '',
  };

  constructor(private imovelService: ImovelService,
              private router: Router,
              private menssagesComponent: MenssagensComponent) {
  }

  ngOnInit(): void {

  }

  createImovel(): void {
    this.imovelService.create(this.imovel).subscribe((response) => {
      if (response) {
        this.showMsg('Operação realizada com sucesso!');
        return this.router.navigate(['/imoveis']);
      } else {
        this.showMsg('Ops, não foi possível salvar o imóvel agora!');
      }
    });
  }

  recoverCep(): void {
    console.log('chamando');
    this.imovelService.cepRecovery(this.imovel.cep).subscribe((response) => {
      this.imovel = response;
      this.showMsg('CEP recuperado com sucesso!');
      console.log({response});
    });
  }

  showMsg(msg): void {
    this.menssagesComponent.showMessage(msg);
  }

  cancel(): void {
    this.router.navigate(['/imoveis']);
  }

}
