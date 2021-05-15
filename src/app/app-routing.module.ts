import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './views/home/home.component';

import {ImoveisCrudComponent} from './views/imoveis-crud/imoveis-crud.component';
import {ImovelCreateComponent} from './componentes/imovel/imovel-create/imovel-create.component';

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
