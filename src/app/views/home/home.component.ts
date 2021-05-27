import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../../componentes/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'ImobiLar Software Imobiliário',
      icon: 'home',
      routerUrl: '/home'
    };
  }

  ngOnInit(): void {
  }

}
