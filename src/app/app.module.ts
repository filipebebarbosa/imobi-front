import {NgModule} from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ImoveisCrudComponent,
    ImovelCreateComponent,
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
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
