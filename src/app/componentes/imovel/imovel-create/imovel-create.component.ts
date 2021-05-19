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
      console.log({response});
      this.imovelService.showMessage('Operação realizada com sucesso!');
      this.router.navigate(['/home']);
    });
  }

  recoverCep(): void {
    console.log('chamando');
    this.imovelService.cepRecovery(this.imovel.cep).subscribe((response) => {
      console.log({response});
    });
  }

}
