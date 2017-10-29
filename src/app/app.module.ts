import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NvD3Module } from 'ng2-nvd3';
import { MaterialModule, MdNativeDateModule } from '@angular/material';

import { Md2Module } from 'md2';


import 'd3';
import 'nvd3';

import { TopSectionComponent } from './topsection/topsection.component';
import { HomeControllerTopMenuComponent } from './home-controller/home-controller-top-menu/home-controller-top-menu.component';
import { HomeSystemControllerComponent } from './home-controller/home-system-controller/home-system-controller.component';
import { HomePoolControllerComponent } from './home-controller/home-pool-controller/home-pool-controller.component';
import { HomeInstanceControllerComponent } from './home-controller/home-instance-controller/home-instance-controller.component';
import { HomeInstanceControllerPanelComponent } from './home-controller/home-instance-controller/home-instance-controller-panel/home-instance-controller-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    TopSectionComponent,
    HomeControllerTopMenuComponent,
    HomeSystemControllerComponent,
    HomePoolControllerComponent,
    HomeInstanceControllerComponent,
    HomeInstanceControllerPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MdNativeDateModule,
    HttpModule,
    NvD3Module,
    Md2Module,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
