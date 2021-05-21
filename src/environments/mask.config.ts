import {IConfig, NgxMaskModule} from 'ngx-mask';
import {NgModule} from '@angular/core';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [
    NgxMaskModule.forRoot(),
  ],
})
