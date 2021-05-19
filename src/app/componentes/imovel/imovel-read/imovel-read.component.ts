import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {ImovelReadDataSource} from './imovel-read-datasource';
import {Imovel} from '../../../views/imoveis-crud/imovel.model';

@Component({
  selector: 'app-imovel-read',
  templateUrl: './imovel-read.component.html',
  styleUrls: ['./imovel-read.component.css']
})
export class ImovelReadComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Imovel>;
  dataSource: ImovelReadDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'logradouro', 'numero', 'bairro', 'cidade', 'uf'];

  constructor() {
    this.dataSource = new ImovelReadDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
