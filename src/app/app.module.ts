import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonService } from './person.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
      PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
