import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

import {NgxCurrencyModule} from 'ngx-currency';
import {NgxMaskModule} from 'ngx-mask';

import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
// requests http
import {HttpClientModule} from '@angular/common/http';

// componentes
import {NavComponent} from './componentes/template/nav/nav.component';

// componente templates
import {HeaderComponent} from './componentes/template/header/header.component';
import {FooterComponent} from './componentes/template/footer/footer.component';

// views
import {HomeComponent} from './views/home/home.component';
import {ImoveisCrudComponent} from './views/imoveis-crud/imoveis-crud.component';
import {ImovelCreateComponent} from './componentes/imovel/imovel-create/imovel-create.component';
import {ImovelReadComponent} from './componentes/imovel/imovel-read/imovel-read.component';
import {ImovelUpdateComponent} from './componentes/imovel/imovel-update/imovel-update.component';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ImoveisCrudComponent,
    ImovelCreateComponent,
    ImovelReadComponent,
    ImovelUpdateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    AppRoutingModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxCurrencyModule,
    NgxMaskModule
  ],
  providers: [AppComponent, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
