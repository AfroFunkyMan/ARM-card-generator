import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TextareaComponent } from './textarea/textarea.component';
import { SettingsComponent } from './settings/settings.component';
import {Text2propertyService} from "./text2property.service";

@NgModule({
  declarations: [
    AppComponent,
    TextareaComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [Text2propertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
