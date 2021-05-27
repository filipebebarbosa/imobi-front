import {Component, OnInit} from '@angular/core';
import {ImovelService} from '../imovel.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Imovel} from '../../../views/imoveis-crud/imovel.model';
import {MenssagensComponent} from '../../menssagens/menssagens.component';

@Component({
  selector: 'app-imovel-update',
  templateUrl: './imovel-update.component.html',
  styleUrls: ['./imovel-update.component.scss']
})
export class ImovelUpdateComponent implements OnInit {

  constructor(
    private imovelService: ImovelService,
    private router: Router,
    private route: ActivatedRoute,
    private menssagesComponent: MenssagensComponent) {
  }

  imovel: Imovel;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getImovelById(id);
  }

  updateImovel(): void {
    this.imovelService.update(this.imovel).subscribe((response) => {
      if (response) {
        this.showMsg('Operação realizada com sucesso!');
        return this.router.navigate(['/imoveis']);
      } else {
        this.showMsg('Ops, não foi possível atualizar o imóvel agora!');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/imoveis']);
  }

  getImovelById(id): void {
    this.imovelService.getImovelById(id).subscribe(imovel => {
      this.imovel = imovel;
    });
  }

  showMsg(msg): void {
    this.menssagesComponent.showMessage(msg);
  }

}
