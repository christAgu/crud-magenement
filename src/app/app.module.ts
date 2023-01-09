import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreatComponent } from './creat/creat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
