import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './views/home/home.component';

import {ImoveisCrudComponent} from './views/imoveis-crud/imoveis-crud.component';
import {ImovelCreateComponent} from './componentes/imovel/imovel-create/imovel-create.component';
import {ImovelUpdateComponent} from './componentes/imovel/imovel-update/imovel-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'imoveis',
    component: ImoveisCrudComponent
  }, {
    path: 'imoveis/create',
    component: ImovelCreateComponent
  }, {
    path: 'imoveis/update/:id',
    component: ImovelUpdateComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
