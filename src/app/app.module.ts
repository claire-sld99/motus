import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotusComponent } from './motus/motus.component';
import { ClavierComponent } from './clavier/clavier.component';

@NgModule({
  declarations: [
    AppComponent,
    MotusComponent,
    ClavierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
