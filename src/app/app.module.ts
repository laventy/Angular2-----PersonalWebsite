import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdNativeDateModule, MdInputModule, MdToolbarModule, MdIconModule, MdMenuModule, MdCardModule } from '@angular/material';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ParallaxPageComponent } from './parallax-page/parallax-page.component';

import {NgsRevealModule} from 'ng-scrollreveal';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ParallaxPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    MdCardModule,
    
    NgsRevealModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
