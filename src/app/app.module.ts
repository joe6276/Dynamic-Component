import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { SampleComponent } from './sample/sample.component';
import { AlertComponent } from './alert/alert.component';
import { ModalDirective } from './shared/directive/ModalDirective';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';
import { SuccessDirective } from './shared/directive/SuccessDirecive';
import { ErrorDirective } from './shared/directive/ErrorDirective';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    SampleComponent,
    AlertComponent,
    ModalDirective,
    SuccessComponent,
    SuccessDirective,
    ErrorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
