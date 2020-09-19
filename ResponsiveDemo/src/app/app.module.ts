import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FuiSidebarModule } from 'ngx-fomantic-ui';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FuiSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
