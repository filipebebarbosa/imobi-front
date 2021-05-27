import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ImovelService} from '../../componentes/imovel/imovel.service';
import {Imovel} from './imovel.model';
import {HeaderService} from '../../componentes/template/header/header.service';

@Component({
  selector: 'app-imoveis-crud',
  templateUrl: './imoveis-crud.component.html',
  styleUrls: ['./imoveis-crud.component.scss']
})
export class ImoveisCrudComponent implements OnInit {

  constructor(private router: Router, private imovelService: ImovelService, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Lista de imóveis',
      icon: '',
      routerUrl: '/imoveis'
    };
  }

  imoveis: Imovel;
  displayedColumns = ['id', 'logradouro', 'numero', 'bairro', 'quartos', 'valorAluguel', 'cidade', 'uf', 'situacao', 'action'];

  display = false;

  ngOnInit(): void {
    this.getListImoveis();
  }

  navigateToImovelCreate(): void {
    this.router.navigate(['imoveis/create']);
  }

  getListImoveis(): void {
    this.imovelService.getListImoveis().subscribe(imoveis => {
        // @ts-ignore
        this.imoveis = imoveis;
      }
    );
  }

  teste(): void {
    this.display = true;
  }
}
