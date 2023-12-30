import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertiesBarComponent } from './properties-bar/properties-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [ 
    MainComponent, 
    NavbarComponent,
    SidebarComponent,
    PropertiesBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    FontAwesomeModule,
    DropdownModule,
    SidebarModule,
    ButtonModule,
    ColorPickerModule,
    ToolbarModule,
    AvatarModule,
    RippleModule,
    CardModule,
    InputTextModule,
  ],
  exports: [ MainComponent ]
})
export class MainModule { }
