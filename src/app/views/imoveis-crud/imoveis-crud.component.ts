import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-imoveis-crud',
  templateUrl: './imoveis-crud.component.html',
  styleUrls: ['./imoveis-crud.component.css']
})
export class ImoveisCrudComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToImovelCreate(): void {
    this.router.navigate(['imoveis/create']);
    console.log('teste!!');
  }

}
