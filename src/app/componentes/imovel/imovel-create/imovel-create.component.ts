import {Component, OnInit} from '@angular/core';
import {ImovelService} from '../imovel.service';
import {Imovel} from '../../../views/imoveis-crud/imovel.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-imovel-create',
  templateUrl: './imovel-create.component.html',
  styleUrls: ['./imovel-create.component.css']
})
export class ImovelCreateComponent implements OnInit {
  imovel: Imovel = null;

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

}
