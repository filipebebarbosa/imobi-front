import {Component, OnInit} from '@angular/core';
import {ImovelService} from '../imovel.service';
import {Imovel} from '../../../views/imoveis-crud/imovel.model';
import {Router} from '@angular/router';

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

  constructor(private imovelService: ImovelService, private router: Router) {
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
      this.showMsg('Cep recuperado com sucesso!');
      console.log({response});
    });
  }

  showMsg(msg): void {
    this.imovelService.showMessage(msg);
  }

  cancel(): void {
    this.router.navigate(['/imoveis']);
  }

}
