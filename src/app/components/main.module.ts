import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
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
import { NavbarComponent } from './navbar/navbar.component';
import { PropertiesBarComponent } from './properties-bar/properties-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'log-in', loadChildren: () => import('./login-signup/login-signup.module').then(m => m.LoginSignupModule) },
];


@NgModule({
  declarations: [ 
    MainComponent, 
    NavbarComponent,
    SidebarComponent,
    PropertiesBarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild( routes ),
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
  exports: [ RouterModule, MainComponent ]
})
export class MainModule { }
