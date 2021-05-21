import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ImovelService} from '../../componentes/imovel/imovel.service';
import {Imovel} from './imovel.model';

@Component({
  selector: 'app-imoveis-crud',
  templateUrl: './imoveis-crud.component.html',
  styleUrls: ['./imoveis-crud.component.scss']
})
export class ImoveisCrudComponent implements OnInit {

  imoveis: Imovel;
  displayedColumns = ['id', 'logradouro', 'numero', 'bairro', 'quartos', 'valorAluguel', 'cidade', 'uf', 'situacao', 'action'];

  constructor(private router: Router, private imovelService: ImovelService) {
  }

  ngOnInit(): void {
    this.getListImoveis();
  }

  navigateToImovelCreate(): void {
    this.router.navigate(['imoveis/create']);
  }

  getListImoveis(): void {
    console.log('carregaLista');
    this.imovelService.getListImoveis().subscribe(imoveis => {
        // @ts-ignore
        this.imoveis = imoveis;
      }
    );
  }

}
