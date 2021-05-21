import {Component, OnInit} from '@angular/core';
import {ImovelService} from '../imovel.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-imovel-delete',
  templateUrl: './imovel-delete.component.html',
  styleUrls: ['./imovel-delete.component.css']
})
export class ImovelDeleteComponent implements OnInit {

  constructor(private imovelService: ImovelService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getImovelById(id);
  }

  getImovelById(id): void {
    console.log('chamando');
    this.imovelService.getImovelById(id).subscribe((response) => {
      console.log({response});
    });
  }
}
